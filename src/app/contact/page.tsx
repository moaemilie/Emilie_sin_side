import StartContent from "@/components/StartContent";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center sm:items-center">
        <StartContent>
          <h2 className="text-3xl font-bold mb-4 flex-1 text-center">
            Kontakt
          </h2>
          <p className="mt-4 text-center ">
            Du kan kontakte meg via e-post på{" "}
            <a
              className="hover:underline font-bold"
              href="mailto:emilie.g.l@hotmail.com"
            >
              emilie.g.l@hotmail.com
            </a>
            .
          </p>
          <p className="mt-4 text-center">Jeg ser frem til å høre fra deg!</p>
        </StartContent>
      </main>
    </div>
  );
}
