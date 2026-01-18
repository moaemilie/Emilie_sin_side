import { getCVSections } from "../../lib/cv";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  const sections = getCVSections();

  return <HomeClient sections={sections} />;
}
