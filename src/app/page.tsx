import Image from "next/image";
import Header from "@/components/Header";
import CvContent from "@/components/CvContent";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center sm:items-start">
        <div className="w-full size-64 bg-foreground rounded-lg radius-50 p-8 mb-8">
          <p className="text-2xl font-bold">
            Dette er Emilie sin nettside hvor det skal bli vist hennes reise
          </p>
        </div>
        <CvContent />
      </main>
    </div>
  );
}
