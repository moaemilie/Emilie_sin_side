"use client";

import { useState, useEffect } from "react";
import CvContent from "@/components/CvContent";
import PixelWalker from "@/components/PixelWalker";
import StartContent from "@/components/StartContent";

interface CVSection {
  id: string;
  title: string;
  content: string;
  pxl_art: string;
  pixel_comment: string;
}

interface HomeClientProps {
  sections: CVSection[];
}

export default function HomeClient({ sections }: HomeClientProps) {
  const [activeComment, setActiveComment] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center sm:items-center">
        {isMobile ? (
          <StartContent />
        ) : (
          <PixelWalker activeComment={activeComment} />
        )}
        <CvContent
          sections={sections}
          onActiveCommentChange={setActiveComment}
        />
        <div className="size-128"></div>
      </main>
    </div>
  );
}
