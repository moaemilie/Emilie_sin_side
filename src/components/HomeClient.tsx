"use client";

import { useState } from "react";
import CvContent from "@/components/CvContent";
import PixelWalker from "@/components/PixelWalker";

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

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center sm:items-center">
        <PixelWalker activeComment={activeComment} />
        <CvContent sections={sections} onActiveCommentChange={setActiveComment} />
        <div className="size-128"></div>
      </main>
    </div>
  );
}
