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
    <div className="fixed left-20 pointer-events-none" style={{ top: "45vh" }}>
      <img
        src={
          imageIndex === 0
            ? "/images/Emilie_pixel_walk_1.png"
            : "/images/Emilie_pixel_walk_2.png"
        }
        alt="Pixel walker"
        className="w-40 h-40 object-contain"
      />
    </div>
  );
}
