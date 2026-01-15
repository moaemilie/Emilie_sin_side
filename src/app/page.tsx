import Image from "next/image";
import Header from "@/components/Header";
import CvContent from "@/components/CvContent";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center bg-white sm:items-start">
        <p className="text-2xl font-bold">
          Dette er Emilie sin nettside hvor det skal bli vist hennes reise
        </p>
        <CvContent />
      </main>
    </div>
  );
}
