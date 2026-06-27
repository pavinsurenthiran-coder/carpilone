"use client";

import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Jobs", href: "#jobs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  return (
    <header
      className={`absolute top-0 left-0 right-0 z-30 ${
        transparent ? "" : "relative bg-white border-b border-navy-900/10"
      }`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <Link href="#top" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-md bg-navy-900 flex items-center justify-center">
            <span className="w-3 h-3 bg-gold-500 rounded-sm" />
          </span>
          <span
            className={`font-serif text-2xl font-bold tracking-tight ${
              transparent ? "text-white" : "text-navy-900"
            }`}
          >
            Carpilone
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[15px] font-medium transition-opacity hover:opacity-70 ${
                transparent ? "text-white" : "text-navy-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#jobs"
            className={`px-5 py-2.5 text-sm font-semibold rounded-sm border transition-colors ${
              transparent
                ? "border-gold-500 text-gold-400 hover:bg-white/5"
                : "border-gold-500 text-gold-600 hover:bg-gold-50"
            }`}
          >
            Find Work
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold rounded-sm bg-navy-900 text-white hover:bg-navy-800 transition-colors"
          >
            Hire Talent
          </a>
        </div>
      </div>
    </header>
  );
}
