"use client";

import { useState, useEffect, useRef } from "react";

export default function PixelWalker() {
  const [imageIndex, setImageIndex] = useState(0);
  const [initialTop, setInitialTop] = useState<number | null>(null);
  const walkerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calculate initial position based on viewport height on mount
    const calculatedTop = window.innerHeight * 0.45;
    setInitialTop(calculatedTop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setImageIndex(Math.floor(scrollY / 50) % 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={walkerRef}
      className="fixed left-4 sm:left-6 md:left-20 pointer-events-none"
      style={{ top: initialTop !== null ? `${initialTop}px` : "45vh" }}
    >
      <img
        src={
          imageIndex === 0
            ? "/images/Emilie_pixel_walk_1.png"
            : "/images/Emilie_pixel_walk_2.png"
        }
        alt="Pixel walker"
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 object-contain"
      />
    </div>
  );
}
