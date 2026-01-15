import sql from "better-sqlite3";

const db = sql("cv_database.db");

interface CVSection {
  id: string;
  title: string;
  content: string;
  pxl_art: string;
}

export function getCVSections(): CVSection[] {
  const stmt = db.prepare(
    "SELECT id, title, content, pxl_art FROM cv_sections"
  );
  const sections: CVSection[] = stmt.all();
  return sections;
}
