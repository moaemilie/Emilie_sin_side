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
    content: `Hi! I'm a passionate developer and creative person. I love building things that blend art and technology. When I'm not coding, you'll find me exploring new ideas, staying active, and continuously learning.`,
    pxl_art: "/images/Pixel_art_1.jpeg",
  },
  {
    id: "Utdanning",
    title: "Utdanning",
    content: `I studied [Your School Name] and learned the fundamentals of computer science, design, and problem-solving. These years shaped my foundation for becoming a well-rounded developer.`,
    pxl_art: "/images/Pixel_art_1.jpeg",
  },
  {
    id: "jobb",
    title: "Jobb erfaring",
    content: `At [Your Company], I worked on [projects/responsibilities]. I developed skills in [technologies], collaborated with teams, and delivered results that made a real impact. This experience taught me the importance of clean code and effective communication.`,
    pxl_art: "/images/Pixel_art_1.jpeg",
  },
  {
    id: "Verv",
    title: "Verv",
    content: `I've contributed to [volunteer organization] by [describing your work]. Volunteering has been incredibly rewarding and helped me give back to the community while developing new skills.`,
    pxl_art: "/images/Pixel_art_1.jpeg",
  },
  {
    id: "Idrett",
    title: "Idrett",
    content: `Rowing has been my passion for [years]. The sport teaches discipline, teamwork, and perseverance. Whether it's early morning training or competing, rowing keeps me balanced and focused.`,
    pxl_art: "/images/Pixel_art_1.jpeg",
  },
];

db.prepare(
  `CREATE TABLE IF NOT EXISTS cv_sections (
    id TEXT PRIMARY KEY, 
    title TEXT NOT NULL, 
    content TEXT NOT NULL, 
    pxl_art TEXT)`
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
    )`
  );
  CV_SECTIONS.forEach((section) => {
    stmt.run(section);
  });
}

initDB();
