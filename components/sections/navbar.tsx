"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#what",          label: "What is PVC" },
  { href: "#history",       label: "History" },
  { href: "#types",         label: "Tacticity" },
  { href: "#manufacturing", label: "Manufacturing" },
  { href: "#applications",  label: "Applications" },
  { href: "#advantages",    label: "Advantages" },
  { href: "#environment",   label: "Environment" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-8 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-neutral-200 shadow-sm"
          : "bg-white/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <a
        href="#"
        className="font-serif text-base text-neutral-900 hover:text-teal-600 transition-colors"
      >
        PVC Study
      </a>

      <ul className="hidden md:flex gap-1 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[0.8rem] font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 px-3 py-1.5 rounded-lg transition-all"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
