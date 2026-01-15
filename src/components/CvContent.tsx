// import { useState, useRef, useEffect } from "react";
import { PixelScene } from "./PixelScene";
import { PixelCharacter } from "./PixelCharacter";

import { getCVSections } from "../../lib/cv";

export default function CvContent() {
  //const [scrollProgress, setScrollProgress] = useState(0);
  //const [currentSection, setCurrentSection] = useState(0);
  // const contentRef = useRef<HTMLDivElement>(null);

  const sections = getCVSections();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!contentRef.current) return;

  //     const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
  //     const maxScroll = scrollHeight - clientHeight;
  //     const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

  //     setScrollProgress(progress);

  //     // Determine which section is in view
  //     const sectionHeight = clientHeight;
  //     const sectionIndex = Math.floor(
  //       (scrollTop / sectionHeight) * (CV_SECTIONS.length / 2)
  //     );
  //     setCurrentSection(Math.min(sectionIndex, CV_SECTIONS.length - 1));
  //   };

  //   const element = contentRef.current;
  //   element?.addEventListener("scroll", handleScroll);

  //   return () => element?.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="w-2/3 mx-auto flex h-screen bg-gray-900 overflow-hidden justify-center">
      {/* Left Side - Pixel Art */}
      <div className="w-1/5 flex flex-col items-center justify-center bg-gray-800 relative p-8">
        Her skal scrolle elementet
      </div>

      {/* Right Side - Scrollable Text */}
      <div
        className="w-4/5 p-12"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 pixel-font">
            My CV
          </h1>

          {sections.map((section: any) => (
            <div key={section.id} className="mb-12">
              <h2 className="text-3xl font-bold mb-4 pixel-font">
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
    </div>
  );
}
