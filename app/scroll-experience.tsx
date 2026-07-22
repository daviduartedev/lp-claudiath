"use client";

import { useEffect } from "react";

export default function ScrollExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const asterisks = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-asterisk]"));

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

    let asteriskFrame = 0;
    const updateAsterisks = () => {
      asteriskFrame = 0;
      const scrollUnit = window.scrollY / Math.max(window.innerHeight, 1);

      asterisks.forEach((asterisk) => {
        const speed = Number(asterisk.dataset.speed ?? 1);
        const phase = Number(asterisk.dataset.phase ?? 0);
        const pulse = (Math.sin(scrollUnit * 2.2 * speed + phase) + 1) / 2;
        const x = Math.sin(scrollUnit * 1.6 * speed + phase) * 32;
        const y = Math.cos(scrollUnit * 1.25 * speed + phase) * 72;
        const rotation = scrollUnit * 75 * speed + phase * 50;

        asterisk.style.setProperty("--asterisk-x", `${x.toFixed(2)}px`);
        asterisk.style.setProperty("--asterisk-y", `${y.toFixed(2)}px`);
        asterisk.style.setProperty("--asterisk-rotation", `${rotation.toFixed(2)}deg`);
        asterisk.style.setProperty("--asterisk-scale", (0.72 + pulse * 0.48).toFixed(3));
        asterisk.style.setProperty("--asterisk-opacity", (0.14 + pulse * 0.3).toFixed(3));
      });
    };
    const queueAsteriskUpdate = () => {
      if (!asteriskFrame) asteriskFrame = window.requestAnimationFrame(updateAsterisks);
    };

    updateAsterisks();
    window.addEventListener("scroll", queueAsteriskUpdate, { passive: true });
    window.addEventListener("resize", queueAsteriskUpdate);

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

    return () => {
      observer.disconnect();
      if (asteriskFrame) window.cancelAnimationFrame(asteriskFrame);
      window.removeEventListener("scroll", queueAsteriskUpdate);
      window.removeEventListener("resize", queueAsteriskUpdate);
      magneticCleanups.forEach((cleanup) => cleanup());
      root.classList.remove("has-js");
    };
  }, []);

  return null;
}
