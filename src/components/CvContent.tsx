// import { useState, useRef, useEffect } from "react";

import { getCVSections } from "../../lib/cv";

export default function CvContent() {

  const sections = getCVSections();

  return (
    <div className="w-2/3 mx-auto flex h-screen overflow-hidden justify-center">
      {/* Venstre side med pixelart scroll */}
      <div className="w-1/5 flex flex-col items-center text-gray-600 justify-center relative p-8">
        Her skal scrolle elementet
      </div>

      {/* Høyre side med CV*/}
      <div
        className="w-4/5 p-12"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 pixel-font text-gray-300">
            My CV
          </h1>

          {sections.map((section: any) => (
            <div key={section.id} className="mb-12">
              <h2 className="text-3xl text-gray-600 font-bold mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
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
