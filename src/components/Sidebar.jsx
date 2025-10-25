import React from "react";

const links = [
  { href: "#overview", label: "Product Overview" },
  { href: "#architecture", label: "Architecture" },
  { href: "#modules", label: "Modules" },
  { href: "#operations", label: "Operations" },
  { href: "#governance", label: "Gov vs Private" },
  { href: "#shifts", label: "Shift Management" },
  { href: "#diagrams", label: "Tenant & Roles" },
  { href: "#kpis", label: "KPIs" },
];

export default function Sidebar() {
  return (
    <nav className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-3 print:hidden">
      <div className="text-xs uppercase tracking-wider text-neutral-400 px-2">PRD Sections</div>
      <ul className="mt-2 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="block rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-yellow-300 hover:bg-neutral-800/60"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
