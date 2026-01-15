"use client";

import { useState, useEffect } from "react";

export default function PixelWalker() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setImageIndex(Math.floor(scrollY / 50) % 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-20 pointer-events-none" style={{ top: "50vh" }}>
      <img
        src={
          imageIndex === 0
            ? "/images/Pixel_art_1.jpeg"
            : "/images/Pixel_art_2.jpeg"
        }
        alt="Pixel walker"
        className="w-20 h-20 object-contain"
      />
    </div>
  );
}
