
interface CVSection {
  id: string;
  title: string;
  content: string;
  scene: "about" | "school" | "job" | "volunteer" | "rowing";
}

const CV_SECTIONS: CVSection[] = [
 {
    id: "about",
    title: "About Me",
    content: `Hi! I'm a passionate developer and creative person. I love building things that blend art and technology. When I'm not coding, you'll find me exploring new ideas, staying active, and continuously learning.`,
    scene: "about",
  },
  {
    id: "school",
    title: "School",
    content: `I studied [Your School Name] and learned the fundamentals of computer science, design, and problem-solving. These years shaped my foundation for becoming a well-rounded developer.`,
    scene: "school",
  },
  {
    id: "job",
    title: "Work Experience",
    content: `At [Your Company], I worked on [projects/responsibilities]. I developed skills in [technologies], collaborated with teams, and delivered results that made a real impact. This experience taught me the importance of clean code and effective communication.`,
    scene: "job",
  },
  {
    id: "volunteer",
    title: "Volunteer Work",
    content: `I've contributed to [volunteer organization] by [describing your work]. Volunteering has been incredibly rewarding and helped me give back to the community while developing new skills.`,
    scene: "volunteer",
  },
  {
    id: "rowing",
    title: "Rowing",
    content: `Rowing has been my passion for [years]. The sport teaches discipline, teamwork, and perseverance. Whether it's early morning training or competing, rowing keeps me balanced and focused.`,
    scene: "rowing",
  },
];

export default CV_SECTIONS;