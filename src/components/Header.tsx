import Link from "next/link";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-6">
        <Link href="/">
          <header className="w-full flex items-center justify-center py-8 pt-25">
            <h1 className="text-7xl">Emilie Giltvedt Langeland</h1>
          </header>
        </Link>
        <SocialLinks />
      </div>
      <nav className="w-full flex items-center justify-center gap-8 py-6">
        <Link href="/projects" className="px-6 py-3 text-xl text-gray-800">
          Prosjekter
        </Link>
        <Link href="/contact" className="px-6 py-3 text-xl text-gray-800">
          Kontakt
        </Link>
      </nav>
    </>
  );
}

export default Header;
