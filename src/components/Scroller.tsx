"use client";

import { useState, useRef, useEffect } from "react";
import { PixelScene } from "./PixelScene";
import { PixelCharacter } from "./PixelCharacter";
import CV_SECTIONS from "../data/cv_sections";

export default function Pixel_Scroller() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

      setScrollProgress(progress);

      // Determine which section is in view
      const sectionHeight = clientHeight;
      const sectionIndex = Math.floor(
        (scrollTop / sectionHeight) * (CV_SECTIONS.length / 2)
      );
      setCurrentSection(Math.min(sectionIndex, CV_SECTIONS.length - 1));
    };

    const element = contentRef.current;
    element?.addEventListener("scroll", handleScroll);

    return () => element?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex h-screen w-full bg-gray-900 overflow-hidden">
      {/* Left Side - Pixel Art */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-800 relative p-8">
        <PixelScene scrollProgress={scrollProgress} />
        <PixelCharacter scrollProgress={scrollProgress} />
      </div>

      {/* Right Side - Scrollable Text */}
      <div
        ref={contentRef}
        className="w-1/2 overflow-y-scroll bg-gray-900 p-12"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 pixel-font">
            My CV
          </h1>

          {CV_SECTIONS.map((section) => (
            <div key={section.id} className="mb-12">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4 pixel-font">
                {section.title}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          ))}

          <div className="h-12" />
        </div>
      </div>

      {/* Scrollbar indicator */}
      <style jsx>{`
        div::-webkit-scrollbar {
          width: 8px;
        }
        div::-webkit-scrollbar-track {
          background: #1f2937;
        }
        div::-webkit-scrollbar-thumb {
          background: #06b6d4;
          border-radius: 4px;
        }
        .pixel-font {
          font-family: "Courier New", monospace;
          letter-spacing: 2px;
        }
      `}</style>
    </div>
  );
}
