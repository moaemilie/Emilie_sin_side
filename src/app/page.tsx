import Image from "next/image";
import Header from "@/components/Header";
import CvContent from "@/components/CvContent";
import StartContent from "@/components/StartContent";
import PixelWalker from "@/components/PixelWalker";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center sm:items-center">
        <PixelWalker />
        <CvContent />
        <div className="size-128"></div>
      </main>
    </div>
  );
}
