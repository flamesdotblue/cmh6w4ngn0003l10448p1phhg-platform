import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContentSections from "./components/ContentSections";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter">
      <Header />
      <main>
        <Hero />
        <ContentSections />
        <ContactForm />
      </main>
      <footer className="border-t border-neutral-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} luxuryHMSPRO by Wasper Technologies. All rights reserved.</p>
          <div className="text-xs text-neutral-500">Multi-tenant SaaS • Low-bandwidth • Offline-first • Secure</div>
        </div>
      </footer>
    </div>
  );
}
