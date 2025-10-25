import React, { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#overview", label: "Overview" },
    { href: "#architecture", label: "Architecture" },
    { href: "#modules", label: "Modules" },
    { href: "#governance", label: "Gov/Private" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-neutral-800 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Logo className="w-8 h-8" />
          <span className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-br from-yellow-200 via-amber-300 to-yellow-500 bg-clip-text text-transparent">luxury</span>
            <span className="text-neutral-200">HMS</span>
            <span className="bg-gradient-to-br from-yellow-200 via-amber-300 to-yellow-500 bg-clip-text text-transparent">PRO</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-neutral-300 hover:text-yellow-300 transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-gradient-to-r from-yellow-300 to-amber-500 text-neutral-900 font-medium px-4 py-2 shadow-[0_0_20px_rgba(234,179,8,0.25)] hover:shadow-[0_0_30px_rgba(234,179,8,0.35)] transition-shadow"
          >
            Request Demo
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-neutral-800 bg-neutral-900"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-neutral-300 hover:text-yellow-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-300 to-amber-500 text-neutral-900 font-medium px-4 py-2"
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
