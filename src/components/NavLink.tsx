"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-6 py-3 text-xl ${
        isActive ? "text-gray-800 border-b-2 border-gray-800" : "text-gray-800"
      }`}
    >
      {children}
    </Link>
  );
}
