"use client";

import { useEffect } from "react";

export default function ScrollExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

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
      magneticCleanups.forEach((cleanup) => cleanup());
      root.classList.remove("has-js");
    };
  }, []);

  return (
    <div className="page-noise" aria-hidden="true" />
  );
}
