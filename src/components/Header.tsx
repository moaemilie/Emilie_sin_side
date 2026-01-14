import Link from "next/link";

function Header() {
  return (
    <>
      <Link href="/">
        <header className="w-full flex items-center justify-center py-8">
          <h1 className="text-7xl font-serif">Emilie Giltvedt Langeland</h1>
        </header>
      </Link>
      <nav className="w-full flex items-center justify-center gap-8 py-6">
        <Link
          href="/projects"
          className="px-6 py-3 text-xl font-serif text-gray-800"
        >
          Prosjekter
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 text-xl font-serif text-gray-800"
        >
          Kontakt
        </Link>
      </nav>
    </>
  );
}

export default Header;
