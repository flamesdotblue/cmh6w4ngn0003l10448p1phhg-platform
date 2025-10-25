import React, { useMemo } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import PRDContent from "./components/PRDContent";
import ContactForm from "./components/ContactForm";
import PDFExportBar from "./components/PDFExportBar";

export default function App() {
  const search = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const splineUrl = useMemo(() => search.get("spline") || "", [search]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter">
      <Header />
      <PDFExportBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="hidden lg:block sticky top-24 self-start">
          <Sidebar />
        </aside>
        <div>
          <Hero splineUrl={splineUrl} />
          <PRDContent />
          <ContactForm />
        </div>
      </main>
      <footer className="border-t border-neutral-800 mt-16 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} luxuryHMSPRO by Wasper Technologies. All rights reserved.</p>
          <div className="text-xs text-neutral-500">Multi-tenant SaaS • Low-bandwidth • Offline-first • Secure</div>
        </div>
      </footer>
    </div>
  );
}
