const sql = require("better-sqlite3");
const db = sql("cv_database.db");

interface CVSection {
  id: string;
  title: string;
  content: string;
  pxl_art: string;
}

const CV_SECTIONS: CVSection[] = [
  {
    id: "Om",
    title: "Om meg",
    content: `Hei! Jeg heter Emilie og er 26 år gammel. Jeg er vokst opp i Oslo, men tok videregående i Mandal. Jeg har alltid vært interessert i relafag og har derfor gått den veien med all min utdanning. Jeg har derfor fått mye tverrfaglig kunnskap innen blant annet programmering, fysikk og maskinlæring.`,
    pxl_art: "/images/Pixel_art_1.jpeg",
  },
  {
    id: "Utdanning",
    title: "Utdanning",
    content: `Jeg tok mastergraden min ved Norges miljø- og biovitenskapelige universitet (NMBU). Masterprogrammet mitt var Miljøfysikk og fornybar energi, med Data Science. Her fikk jeg muligheten til å fordype meg i både fysikk, men samtidig ta flere fag innen ML og informatikk.
    
    Jeg har fullført flere kurs i informatikk (dataanalyse, maskinlæring, datautvinning, programmering i Python, C++, Java, R og MATLAB), fysikk (Kjernefysikk, mekanikk, termodynamikk, elektronikk, kvantemekanikk) og matematikk (Kalkulus I, Kalkulus II, Anvendt lineær algebra).
    
    I min master skrev jeg om murstein. Dette var utrolig gøy og lærerrikt. Her tok jeg hyperspektrale bilder av murstein for å danne et datagrunnlag uten fysiske tester. Jeg tok deretter flere fysiske tester på mursteinene for å måle deres fysiske egenskaper. Deretter var den en analyse-jobb for å se om det var mulig å koble de fysiske egenskapene til mursteinen til de hyerspektrale. Her fikk jeg mulighet til å være løsningsorientert og tenke kreativit noe jeg trives veldig godt med!

    I det fjerde året av masterstudiet mitt fikk jeg muligheten til å ta et utvekslingssemester i Belgia. Under dette utvekslingsoppholdet tok jeg kurs i Data Mining, Dynamiske systemer og Statistiske metoder.
    `,
    pxl_art: "/images/Pixel_art_1.jpeg",
  },
  {
    id: "jobb",
    title: "Jobb erfaring",
    content: `Jeg jobber som utvikler i Innovasjonsteamet i IT-avdelingen i Skatteetaten, hvor jeg utforsker og demonstrerer ny teknologi med fokus på kunstig intelligens og store språkmodeller (LLM-er). I rollen utvikler jeg fullstack-applikasjoner med hovedvekt på frontend i JavaScript/TypeScript og React, samt backend i Node.js og Python. Jeg utvikler i tillegg enkelte løsninger som rene Python-applikasjoner med Gradio. Jeg har hatt ansvar for hele utviklingsprosessen – fra idé og konseptutvikling til ferdig deployet løsning – og bruker Azure som plattform for utrulling og drift. `,
    pxl_art: "/images/Pixel_art_1.jpeg",
  },
  {
    id: "Verv",
    title: "Verv",
    content: `Jeg var Karrieredagsansvarlig i Næringslivstuvalget. Her hadde jeg ansvaret for å arrangere karrieredagen ved NMBU. Jeg hadde da ansvaret for både planleggingen og gjenomføringen av arrangementet.`,
    pxl_art: "/images/Pixel_art_1.jpeg",
  },
  {
    id: "Idrett",
    title: "Idrett",
    content: `Jeg har tidligere drevet med roing! Dette var en stor del av livet mitt i mange år, og jeg konkurrerte på nasjonalt nivå. Jeg vant blant annet NM i innendørs roing og kom på tredje o dobbelt firrer utendørs. Roing lærte meg mye om sammarbeid og arbeidsinnsats – verdier jeg tar med meg videre i livet.`,
    pxl_art: "/images/Pixel_art_1.jpeg",
  },
];

db.prepare(
  `CREATE TABLE IF NOT EXISTS cv_sections (
    id TEXT PRIMARY KEY, 
    title TEXT NOT NULL, 
    content TEXT NOT NULL, 
    pxl_art TEXT)`,
).run();

async function initDB() {
  const stmt = db.prepare(
    `INSERT OR REPLACE INTO cv_sections (
      id, 
      title, 
      content, 
      pxl_art) 
      VALUES (
      @id, 
      @title, 
      @content, 
      @pxl_art
    )`,
  );
  CV_SECTIONS.forEach((section) => {
    stmt.run(section);
  });
}

initDB();
