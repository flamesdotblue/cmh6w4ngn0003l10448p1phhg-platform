import React from "react";

export default function TenantRoleDiagram() {
  return (
    <div className="rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 p-6">
      <h3 className="text-xl font-semibold">Tenant, Departments, Roles & Shifts</h3>
      <svg viewBox="0 0 900 360" className="w-full h-auto mt-4">
        <defs>
          <linearGradient id="gl" x1="0" x2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="880" height="340" rx="16" fill="#0a0a0a" stroke="#3f3f46" />
        <text x="30" y="40" fill="#facc15" fontSize="14" fontWeight="600">Tenant: Hospital A</text>

        <g>
          <rect x="30" y="60" width="240" height="120" rx="10" fill="#0b0b0b" stroke="#3f3f46" />
          <text x="45" y="88" fill="#eab308" fontSize="12" fontWeight="600">Departments</text>
          <circle cx="55" cy="108" r="4" fill="#f59e0b" />
          <text x="65" y="112" fill="#d4d4d8" fontSize="11">Eye Clinic</text>
          <circle cx="55" cy="132" r="4" fill="#f59e0b" />
          <text x="65" y="136" fill="#d4d4d8" fontSize="11">Gynecology</text>
          <circle cx="55" cy="156" r="4" fill="#f59e0b" />
          <text x="65" y="160" fill="#d4d4d8" fontSize="11">Emergency</text>
        </g>

        <g>
          <rect x="325" y="60" width="240" height="120" rx="10" fill="#0b0b0b" stroke="#3f3f46" />
          <text x="340" y="88" fill="#eab308" fontSize="12" fontWeight="600">Roles</text>
          <circle cx="350" cy="108" r="4" fill="#f59e0b" />
          <text x="360" y="112" fill="#d4d4d8" fontSize="11">Doctor / Nurse</text>
          <circle cx="350" cy="132" r="4" fill="#f59e0b" />
          <text x="360" y="136" fill="#d4d4d8" fontSize="11">Pharmacist / Lab Tech</text>
          <circle cx="350" cy="156" r="4" fill="#f59e0b" />
          <text x="360" y="160" fill="#d4d4d8" fontSize="11">Admin / Accountant</text>
        </g>

        <g>
          <rect x="620" y="60" width="240" height="120" rx="10" fill="#0b0b0b" stroke="#3f3f46" />
          <text x="635" y="88" fill="#eab308" fontSize="12" fontWeight="600">Shifts</text>
          <circle cx="645" cy="108" r="4" fill="#f59e0b" />
          <text x="655" y="112" fill="#d4d4d8" fontSize="11">Morning</text>
          <circle cx="645" cy="132" r="4" fill="#f59e0b" />
          <text x="655" y="136" fill="#d4d4d8" fontSize="11">Afternoon</text>
          <circle cx="645" cy="156" r="4" fill="#f59e0b" />
          <text x="655" y="160" fill="#d4d4d8" fontSize="11">Night</text>
        </g>

        <line x1="270" y1="120" x2="325" y2="120" stroke="url(#gl)" strokeWidth="3" />
        <line x1="565" y1="120" x2="620" y2="120" stroke="url(#gl)" strokeWidth="3" />

        <text x="30" y="220" fill="#facc15" fontSize="12" fontWeight="600">Cross-Department Patient Flow</text>
        <rect x="30" y="230" width="830" height="100" rx="10" fill="#0b0b0b" stroke="#3f3f46" />
        <circle cx="70" cy="280" r="6" fill="#f59e0b" />
        <text x="85" y="284" fill="#d4d4d8" fontSize="11">Emergency</text>
        <line x1="140" y1="280" x2="240" y2="280" stroke="#a3a3a3" />
        <circle cx="260" cy="280" r="6" fill="#f59e0b" />
        <text x="275" y="284" fill="#d4d4d8" fontSize="11">Ward</text>
        <line x1="320" y1="280" x2="420" y2="280" stroke="#a3a3a3" />
        <circle cx="440" cy="280" r="6" fill="#f59e0b" />
        <text x="455" y="284" fill="#d4d4d8" fontSize="11">Lab</text>
        <line x1="500" y1="280" x2="600" y2="280" stroke="#a3a3a3" />
        <circle cx="620" cy="280" r="6" fill="#f59e0b" />
        <text x="635" y="284" fill="#d4d4d8" fontSize="11">Pharmacy</text>
        <line x1="680" y1="280" x2="780" y2="280" stroke="#a3a3a3" />
        <circle cx="800" cy="280" r="6" fill="#f59e0b" />
        <text x="815" y="284" fill="#d4d4d8" fontSize="11">Discharge</text>
      </svg>
      <div className="mt-3 text-xs text-neutral-400">Shared patient record across departments with role- and shift-aware access control.</div>
    </div>
  );
}
