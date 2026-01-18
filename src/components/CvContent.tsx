"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface CVSection {
  id: string;
  title: string;
  content: string;
  pxl_art: string;
  pixel_comment: string;
}

interface CvContentProps {
  sections: CVSection[];
  onActiveCommentChange?: (comment: string | null) => void;
}

export default function CvContent({
  sections,
  onActiveCommentChange,
}: CvContentProps) {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the center
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(
            entry.target as HTMLDivElement,
          );
          if (index !== -1 && sections[index]) {
            onActiveCommentChange?.(sections[index].pixel_comment);
          }
        }
      });
    }, options);

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [mounted, sections, onActiveCommentChange]);

  return (
    <div className="w-1/2 mx-auto flex justify-center pt-[40vh] sm:pt-[35vh] md:pt-[30vh]">
      <div
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div className="mx-auto">
          {sections.map((section: any, index: number) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="mb-12 border-2 border-black rounded-lg p-6 shadow-[4px_4px_0_0_#000] bg-white/10 "
            >
              <div className="mb-6 flex flex-col items-center justify-center">
                {section.pxl_art && (
                  <Image
                    src={section.pxl_art}
                    alt={section.title}
                    width={200}
                    height={100}
                  />
                )}
                <h2 className="text-3xl font-bold mb-4 flex-1 text-center">
                  {section.title}
                </h2>
              </div>
              <p className="leading-relaxed whitespace-pre-line text-lg">
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
