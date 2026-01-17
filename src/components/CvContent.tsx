// import { useState, useRef, useEffect } from "react";

import { getCVSections } from "../../lib/cv";

export default function CvContent() {
  const sections = getCVSections();

  return (
    <div className="w-2/3 mx-auto flex justify-center">
      <div
        className="w-4/5 p-12"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div className="max-w-2xl mx-auto">
          {/*<h1 className="text-4xl font-bold mb-8 pixel-font text-gray-300">
            My CV
          </h1>*/}

          {sections.map((section: any) => (
            <div key={section.id} className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
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
