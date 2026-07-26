"use client";

import { useEffect } from "react";

export default function ScrollExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const scrollActivateItems = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-activate]"));
    const asterisks = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-asterisk]"));
    const motionSections = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-section]"));
    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));

    root.classList.add("has-js");

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      scrollActivateItems.forEach((item) => item.classList.add("is-scroll-active"));
      root.style.setProperty("--scroll-progress", "1");
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

    const activationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          (entry.target as HTMLElement).classList.toggle("is-scroll-active", entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "-34% 0px -34% 0px" },
    );
    scrollActivateItems.forEach((item) => activationObserver.observe(item));

    let motionFrame = 0;
    const updateMotion = () => {
      motionFrame = 0;
      const viewportHeight = Math.max(window.innerHeight, 1);
      const pageRange = Math.max(document.documentElement.scrollHeight - viewportHeight, 1);
      const pageProgress = Math.min(Math.max(window.scrollY / pageRange, 0), 1);
      const scrollUnit = window.scrollY / Math.max(window.innerHeight, 1);

      root.style.setProperty("--scroll-progress", pageProgress.toFixed(4));

      motionSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const rawOffset = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const offset = Math.min(Math.max(rawOffset, -1.5), 1.5);
        const progress = Math.min(
          Math.max((viewportHeight - rect.top) / (viewportHeight + rect.height), 0),
          1,
        );

        section.style.setProperty("--motion-y", `${(-offset * 64).toFixed(2)}px`);
        section.style.setProperty("--motion-y-soft", `${(-offset * 28).toFixed(2)}px`);
        section.style.setProperty("--motion-x", `${(offset * 42).toFixed(2)}px`);
        section.style.setProperty("--motion-rotate", `${(offset * 5).toFixed(2)}deg`);
        section.style.setProperty("--motion-progress", progress.toFixed(4));
      });

      asterisks.forEach((asterisk) => {
        const speed = Number(asterisk.dataset.speed ?? 1);
        const phase = Number(asterisk.dataset.phase ?? 0);
        const pulse = (Math.sin(scrollUnit * 1.25 * speed + phase) + 1) / 2;
        const x = Math.sin(scrollUnit * 0.9 * speed + phase) * 9;
        const y = Math.cos(scrollUnit * 0.72 * speed + phase) * 20;
        const rotation = scrollUnit * 18 * speed + phase * 18;

        asterisk.style.setProperty("--asterisk-x", `${x.toFixed(2)}px`);
        asterisk.style.setProperty("--asterisk-y", `${y.toFixed(2)}px`);
        asterisk.style.setProperty("--asterisk-rotation", `${rotation.toFixed(2)}deg`);
        asterisk.style.setProperty("--asterisk-scale", (0.9 + pulse * 0.1).toFixed(3));
        asterisk.style.setProperty("--asterisk-opacity", (0.05 + pulse * 0.1).toFixed(3));
      });
    };
    const queueMotionUpdate = () => {
      if (!motionFrame) motionFrame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", queueMotionUpdate, { passive: true });
    window.addEventListener("resize", queueMotionUpdate);

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

    const tiltCleanups = tiltItems.map((item) => {
      const move = (event: PointerEvent) => {
        if (event.pointerType === "touch") return;
        const rect = item.getBoundingClientRect();
        const horizontal = (event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5;
        const vertical = (event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5;
        item.style.setProperty("--tilt-x", `${(-vertical * 7).toFixed(2)}deg`);
        item.style.setProperty("--tilt-y", `${(horizontal * 7).toFixed(2)}deg`);
        item.style.setProperty("--tilt-lift", "-8px");
      };
      const leave = () => {
        item.style.setProperty("--tilt-x", "0deg");
        item.style.setProperty("--tilt-y", "0deg");
        item.style.setProperty("--tilt-lift", "0px");
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
      activationObserver.disconnect();
      if (motionFrame) window.cancelAnimationFrame(motionFrame);
      window.removeEventListener("scroll", queueMotionUpdate);
      window.removeEventListener("resize", queueMotionUpdate);
      magneticCleanups.forEach((cleanup) => cleanup());
      tiltCleanups.forEach((cleanup) => cleanup());
      root.style.removeProperty("--scroll-progress");
      root.classList.remove("has-js");
    };
  }, []);

  return null;
}
