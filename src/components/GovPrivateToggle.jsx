import React, { useState } from "react";

const gov = {
  title: "Government Hospital",
  points: [
    "Managed under State/Federal Health Board",
    "Single government tenant → multiple hospitals (sub-tenants)",
    "Aggregated analytics and compliance reporting",
    "Subsidized billing & NHIS integration",
    "Centralized audit trail and governance dashboard",
  ],
};

const priv = {
  title: "Private Hospital",
  points: [
    "Independent tenant per hospital",
    "Internal admin-only analytics",
    "Full-cost billing & private insurance",
    "Local audit trail and financial controls",
    "Faster customization per facility",
  ],
};

export default function GovPrivateToggle() {
  const [mode, setMode] = useState("gov");

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h3 className="text-xl font-semibold">Government vs Private</h3>
        <div className="inline-flex rounded-lg border border-neutral-800 bg-neutral-950 p-1">
          <button
            onClick={() => setMode("gov")}
            className={`px-4 py-2 text-sm rounded-md ${mode === "gov" ? "bg-gradient-to-r from-yellow-300 to-amber-500 text-neutral-900" : "text-neutral-300"}`}
          >
            Government
          </button>
          <button
            onClick={() => setMode("priv")}
            className={`px-4 py-2 text-sm rounded-md ${mode === "priv" ? "bg-gradient-to-r from-yellow-300 to-amber-500 text-neutral-900" : "text-neutral-300"}`}
          >
            Private
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-6">
        <Panel data={mode === "gov" ? gov : priv} />
        <Panel data={mode === "gov" ? priv : gov} muted />
      </div>
    </div>
  );
}

function Panel({ data, muted = false }) {
  return (
    <div className={`rounded-xl border ${muted ? "border-neutral-800 bg-neutral-900/50" : "border-yellow-500/30 bg-neutral-900/70"} p-5`}>
      <h4 className="text-sm font-semibold text-yellow-300">{data.title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-neutral-300 list-disc list-inside">
        {data.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
