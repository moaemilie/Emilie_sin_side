"use client";

import Link from "next/link";
import SocialLinks from "./SocialLinks";
import NavLink from "./NavLink";

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
        <NavLink href="/projects">Prosjekter</NavLink>
        <div className="w-px h-8 bg-gray-400"></div>
        <NavLink href="/contact">Kontakt</NavLink>
      </nav>
    </>
  );
}

export default Header;
