// import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { getCVSections } from "../../lib/cv";

export default function CvContent() {
  const sections = getCVSections();

  return (
    <div className="w-1/2 mx-auto flex justify-center pt-[40vh] sm:pt-[35vh] md:pt-[30vh]">
      <div
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div className="mx-auto">
          {sections.map((section: any) => (
            <div
              key={section.id}
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
