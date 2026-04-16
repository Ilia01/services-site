"use client";

import { useState, useEffect, useRef } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-lg text-heading">
          Ilia Goginashvili
        </span>

        <a
          href="#contact"
          className="text-sm font-medium text-white bg-green px-5 py-2.5 rounded-lg hover:bg-green-light transition-colors duration-200"
        >
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
}
