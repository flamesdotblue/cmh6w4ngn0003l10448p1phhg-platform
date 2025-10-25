import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Activity, Users, Building2 } from "lucide-react";
import Logo from "./Logo";

export default function Hero({ splineUrl = "" }) {
  const hasSpline = typeof splineUrl === "string" && splineUrl.trim().length > 0;

  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-yellow-200/10 via-amber-400/10 to-yellow-600/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-32 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-amber-600/10 via-yellow-400/10 to-yellow-200/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10 hidden sm:block" />
              <div className="text-yellow-300 text-sm sm:text-base">Premium multi-tenant HMS for Governments and Private Groups</div>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
            >
              Unified, intelligent Hospital Management for every department
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-neutral-300 max-w-2xl"
            >
              luxuryHMSPRO is a low-bandwidth, offline-ready HMS connecting doctors, nurses, patients, and administrators with secure, real-time operations across departments.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#overview" className="inline-flex items-center rounded-md border border-yellow-500/40 bg-neutral-900/50 px-4 py-2 text-yellow-300 hover:bg-neutral-800">Explore PRD</a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-yellow-300 to-amber-500 text-neutral-900 font-medium px-4 py-2">Contact Stakeholder Team</a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-sm">
              <Stat icon={Building2} label="Hospitals" value="100+" />
              <Stat icon={Users} label="Active Users" value="5k+" />
              <Stat icon={Activity} label="Uptime" value="99.9%" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 overflow-hidden">
              {hasSpline ? (
                <div className="w-full h-[360px]">
                  <Spline scene={splineUrl} />
                </div>
              ) : (
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Realtime", desc: "Supabase Realtime across departments" },
                      { title: "Offline-first", desc: "PWA + IndexedDB caching" },
                      { title: "Multi-tenant", desc: "Per-hospital isolation" },
                      { title: "AI-ready", desc: "Summaries & predictive insights" },
                    ].map((c) => (
                      <div key={c.title} className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-4">
                        <p className="text-sm font-medium text-yellow-300">{c.title}</p>
                        <p className="mt-1 text-xs text-neutral-400">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-xs text-neutral-400">Built with Next.js, Supabase, Tailwind, and Framer Motion.</div>
                </div>
              )}
            </div>
            {!hasSpline && (
              <div className="text-xs text-neutral-500 mt-2">Tip: append ?spline=YOUR_SPLINE_SCENE_URL to load a 3D hero.</div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
      <div className="flex items-center gap-2 text-yellow-300">
        <Icon className="w-4 h-4" />
        <span className="text-xs uppercase tracking-wide">{label}</span>
      </div>
      <div className="mt-1 text-xl font-semibold">{value}</div>
    </div>
  );
}
