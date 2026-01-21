import StartContent from "@/components/StartContent";

export default function ProjectPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col items-center sm:items-center">
        <StartContent>
          <p>
            På denne siden presenterer jeg noen av mine tidligere prosjekter.
          </p>
        </StartContent>
        <div className="size-128 mt-12">
          <div className="pt-5">
            <h2 className="text-3xl font-bold mb-4 flex-1 text-center">
              Master innen hyperspektral avbilding av murstein
            </h2>
            <p>
              Jeg skrev en master innen hyperspektral avbilding av murstein.
              Masteren beso av to faser. Den første var en datainnhentingsfase.
              Her lagde jeg to datasett. Det ene bestående av hyperspektrale
              bilder, og den andre ble laget ved å kvantifisere de ulike
              egenskapene til mursteinene. Den andre fasen var dataanalyse. Her
              forsøkte jeg å finne en korrelasjon mellom egenskapene til
              mursteinene, og egenskapene vist i de hyperspektrale bildene.
              Dette var en utrolig spennense master hvor jeg fikk både utfordret
              meg praktisk og teoretisk
            </p>
            <a
              className="hover:underline font-bold"
              href="https://github.com/moaemilie/Master_preprosessering"
            >
              Her kan du se koden brukt i masteren.
            </a>
          </div>

          <div className="pt-10">
            <h2 className="text-3xl font-bold mb-4 flex-1 text-center">
              Breakout Game i Java
            </h2>
            <p>
              Under min utveksling tok jeg et fag i objektorientert
              programmering i Java. En av oppgavene var da å lage et Break Out
              game fra bunnen av ved bruk av Java. Dette var slik jeg lærte meg
              språket.
            </p>
            <a
              className="hover:underline font-bold"
              href="https://github.com/moaemilie/breakout_game_oop_2"
            >
              Her kan du se koden brukt i spillet.
            </a>
          </div>
          <div className="pt-10">
            <h2 className="text-3xl font-bold mb-4 flex-1 text-center">
              Computational Physics
            </h2>
            <p>
              Jeg tok computational physics ved UiO hvor vi programmerte fysikk
              simuleringer i C++. Her hadde vi flere prosjekter
            </p>
            <p>
              Jeg tok computational physics ved UiO hvor vi programmerte fysikk
              simuleringer i C++. Her hadde vi flere prosjekter. Ett av de var å
              simulere en partikkel i boks, og hvor den høyst sannsynlig
              befinner seg. Vi brukte Monte Carlo metoden for å simulere
              partikkelens bevegelse. Dette var et utrolig gøy prosjekt hvor jeg
              lærte mye om både fysikk og programmering i C++.
            </p>
            <a
              className="hover:underline font-bold"
              href="https://github.com/moaemilie/Project3_FYS4150"
            >
              Her kan du se koden til partikkel i boks eksperimentet.
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
