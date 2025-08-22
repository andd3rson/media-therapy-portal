"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const onNav = () => setOpen(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-medium shadow-sm">
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold text-neutral-dark hover:text-primary transition-colors">
            MediaTherapy
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-md border border-neutral-medium hover:bg-neutral-light"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className="hidden lg:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-primary transition-colors ${
                  pathname === item.href ? "text-primary font-medium" : "text-neutral-dark"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
          hidden
            href="/login"
            className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-neutral-medium bg-white">
          <ul className="px-4 py-2 flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNav}
                  className={`block py-2 px-3 rounded-md hover:bg-neutral-light transition-colors ${
                    pathname === item.href ? "text-primary font-medium bg-primary/10" : "text-neutral-dark"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/login"
                onClick={onNav}
                className="block px-3 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-center"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
