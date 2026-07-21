"use client";

import { useEffect } from "react";

export default function ScrollExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.getElementById("site-header");
    const cursor = document.querySelector<HTMLElement>(".cursor-orb");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const scrubItems = Array.from(document.querySelectorAll<HTMLElement>("[data-scrub]"));
    const hero = document.querySelector<HTMLElement>(".hero");

    root.classList.add("has-js");

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => root.classList.remove("has-js");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    revealItems.forEach((item) => observer.observe(item));

    let frame = 0;
    let lastScroll = window.scrollY;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    const render = () => {
      frame = 0;
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty("--page-progress", String(scrollY / maxScroll));
      root.style.setProperty("--orbit-rotation", `${scrollY * 0.055}deg`);

      if (hero) {
        const heroProgress = Math.min(1, Math.max(0, scrollY / hero.offsetHeight));
        root.style.setProperty("--hero-scale", String(1.04 + heroProgress * 0.12));
        root.style.setProperty("--hero-y", `${heroProgress * 64}px`);
        root.style.setProperty("--hero-copy-y", `${heroProgress * -90}px`);
      }

      scrubItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        const distance = Number(item.dataset.distance ?? 0);
        item.style.setProperty("--scrub-x", `${(progress - 0.5) * distance}px`);
      });

      if (header) {
        header.classList.toggle("is-compact", scrollY > 48);
        header.classList.toggle("is-hidden", scrollY > lastScroll && scrollY > 280);
      }
      lastScroll = scrollY;
    };

    const requestRender = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const pointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      root.style.setProperty("--pointer-x", `${mouseX}px`);
      root.style.setProperty("--pointer-y", `${mouseY}px`);
    };

    let cursorFrame = 0;
    const renderCursor = () => {
      cursorX += (mouseX - cursorX) * 0.13;
      cursorY += (mouseY - cursorY) * 0.13;
      if (cursor) cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      cursorFrame = window.requestAnimationFrame(renderCursor);
    };

    const magneticItems = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const magneticCleanups = magneticItems.map((item) => {
      const move = (event: PointerEvent) => {
        const rect = item.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        item.style.setProperty("--magnetic-x", `${x * 0.14}px`);
        item.style.setProperty("--magnetic-y", `${y * 0.14}px`);
      };
      const leave = () => {
        item.style.setProperty("--magnetic-x", "0px");
        item.style.setProperty("--magnetic-y", "0px");
      };
      item.addEventListener("pointermove", move);
      item.addEventListener("pointerleave", leave);
      return () => {
        item.removeEventListener("pointermove", move);
        item.removeEventListener("pointerleave", leave);
      };
    });

    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    window.addEventListener("pointermove", pointerMove, { passive: true });
    render();
    cursorFrame = window.requestAnimationFrame(renderCursor);

    return () => {
      observer.disconnect();
      magneticCleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      window.removeEventListener("pointermove", pointerMove);
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(cursorFrame);
      root.classList.remove("has-js");
    };
  }, []);

  return (
    <>
      <div className="cursor-orb" aria-hidden="true" />
      <div className="page-noise" aria-hidden="true" />
    </>
  );
}
