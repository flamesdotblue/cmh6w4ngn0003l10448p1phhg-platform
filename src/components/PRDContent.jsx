import React from "react";
import { Shield, HeartPulse, Stethoscope, Pill, FlaskConical, BedDouble, Building2 } from "lucide-react";
import GovPrivateToggle from "./GovPrivateToggle";
import TenantRoleDiagram from "./TenantRoleDiagram";

export default function PRDContent() {
  return (
    <section id="overview" className="relative">
      <div className="max-w-7xl mx-auto py-10">
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-neutral-900/60 px-3 py-1 text-xs text-yellow-300">
            <Shield className="w-3.5 h-3.5" /> Multi-tenant SaaS PRD
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold">Product Overview</h2>
          <p className="mt-2 text-neutral-300">Title: luxuryHMSPRO • Owner: Wasper Technologies • Deployment: Cloud (multi-tenant) with optional on-prem sync.</p>
        </header>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <InfoCard title="Vision" items={["Unified, secure, intelligent HMS","Connects doctors, nurses, patients, admins","Real-time across departments"]} />
          <InfoCard title="Core Objectives" items={["Low-bandwidth, real-time ops","Multi-tenant isolation","Offline-first PWA","Unified auth & shift control","AI-assisted analytics","Seamless lab/pharmacy/billing"]} />
          <InfoCard title="Target Users" items={["Government hospitals","Private hospitals","Specialized medical centers"]} />
        </div>

        <div id="modules" className="mt-12">
          <h3 className="text-xl font-semibold">Key Modules</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Module icon={HeartPulse} title="Patient Management" points={["Registration (manual/ID)","Unified medical record","Consent & dependents"]} />
            <Module icon={Stethoscope} title="Doctor Notes" points={["Templates & versions","Handwriting & voice","AI summarization"]} />
            <Module icon={Pill} title="Pharmacy" points={["Inventory & expiry","Prescribe → dispense","Auto-billing"]} />
            <Module icon={FlaskConical} title="Laboratory" points={["Test requests","Digital/scanned results","Link to records"]} />
            <Module icon={BedDouble} title="Wards & Beds" points={["Allocation & status","Nurse dashboard","Admission → discharge"]} />
            <Module icon={Building2} title="Multi-Block" points={["Independent queues","Shared patient ID","Dept dashboards"]} />
          </div>
        </div>

        <div id="architecture" className="mt-16">
          <h3 className="text-xl font-semibold">Architecture Snapshot</h3>
          <p className="mt-2 text-sm text-neutral-400">Next.js front-end • Supabase backend (Auth/DB/Realtime/Storage) • PWA offline support • RBAC & JWT • Edge Functions.</p>
          <ArchitectureDiagram />
        </div>

        <div id="operations" className="mt-16 grid md:grid-cols-3 gap-6">
          <InfoCard title="Security" items={["AES-256 at rest","RBAC & audit logs","JWT per request","Tenant isolation"]} />
          <InfoCard title="Performance" items={["<2s page loads","Optimized PDFs","Pagination & lazy-load","Realtime updates"]} />
          <InfoCard title="Ops & Dev" items={["CI/CD on Vercel","Supabase logs","Daily DB snapshots","Multi-region ready"]} />
        </div>

        <div id="governance" className="mt-16">
          <GovPrivateToggle />
        </div>

        <div id="diagrams" className="mt-16">
          <TenantRoleDiagram />
        </div>

        <div id="shifts" className="mt-16">
          <InfoCard title="Shift Management" items={["Create Morning/Afternoon/Night","Attendance (manual/QR)","Auto logout & handover notes"]} />
        </div>

        <div id="kpis" className="mt-10 text-xs text-neutral-500">
          KPIs: <span className="text-neutral-300">Load <2s • Notes upload <3s • Onboarding <2 days • Uptime 99.9% • 100+ hospitals • 1s record latency</span>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, items }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 break-inside-avoid-page">
      <h4 className="text-sm font-semibold text-yellow-300">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-neutral-300 list-disc list-inside">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function Module({ icon: Icon, title, points }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5">
      <div className="flex items-center gap-2 text-yellow-300">
        <Icon className="w-4 h-4" />
        <h5 className="text-sm font-semibold">{title}</h5>
      </div>
      <ul className="mt-3 space-y-1 text-sm text-neutral-300 list-disc list-inside">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="mt-6 rounded-xl border border-yellow-500/30 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 p-6">
      <svg viewBox="0 0 900 320" className="w-full h-auto">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect x="10" y="20" width="880" height="280" rx="12" fill="#0a0a0a" stroke="#3f3f46" />
        <text x="30" y="50" fill="#facc15" fontSize="14" fontWeight="600">Wasper Multi-tenant Layer</text>

        <rect x="30" y="70" width="250" height="210" rx="10" fill="#0b0b0b" stroke="#3f3f46" />
        <text x="45" y="95" fill="#eab308" fontSize="12" fontWeight="600">Tenant: Hospital</text>
        <text x="45" y="115" fill="#a3a3a3" fontSize="11">Departments (Blocks)</text>
        <circle cx="55" cy="135" r="4" fill="#f59e0b" />
        <text x="65" y="139" fill="#d4d4d8" fontSize="11">Eye, Gyn, Surgery, Emergency</text>
        <text x="45" y="165" fill="#a3a3a3" fontSize="11">Roles</text>
        <circle cx="55" cy="185" r="4" fill="#f59e0b" />
        <text x="65" y="189" fill="#d4d4d8" fontSize="11">Doctor, Nurse, Lab, Pharmacy</text>
        <circle cx="55" cy="210" r="4" fill="#f59e0b" />
        <text x="65" y="214" fill="#d4d4d8" fontSize="11">Admin, Accountant, Reception</text>

        <rect x="310" y="70" width="250" height="210" rx="10" fill="#0b0b0b" stroke="#3f3f46" />
        <text x="325" y="95" fill="#eab308" fontSize="12" fontWeight="600">Frontend</text>
        <text x="325" y="115" fill="#d4d4d8" fontSize="11">Next.js UI • Tailwind • PWA</text>
        <text x="325" y="135" fill="#a3a3a3" fontSize="11">- Offline caching (IndexedDB)</text>
        <text x="325" y="155" fill="#a3a3a3" fontSize="11">- Realtime queues & beds</text>
        <text x="325" y="175" fill="#a3a3a3" fontSize="11">- Role/shift aware screens</text>

        <rect x="590" y="70" width="250" height="210" rx="10" fill="#0b0b0b" stroke="#3f3f46" />
        <text x="605" y="95" fill="#eab308" fontSize="12" fontWeight="600">Backend (Supabase)</text>
        <text x="605" y="115" fill="#d4d4d8" fontSize="11">Auth • Postgres • Edge Fn • Storage</text>
        <text x="605" y="135" fill="#a3a3a3" fontSize="11">- JWT + RBAC + Row-level security</text>
        <text x="605" y="155" fill="#a3a3a3" fontSize="11">- Realtime (lab results, queues)</text>
        <text x="605" y="175" fill="#a3a3a3" fontSize="11">- Encrypted uploads</text>

        <line x1="560" y1="175" x2="590" y2="175" stroke="url(#g1)" strokeWidth="3" />
        <line x1="280" y1="175" x2="310" y2="175" stroke="url(#g1)" strokeWidth="3" />
        <text x="410" y="200" fill="#a3a3a3" fontSize="11">Secure API routes</text>
      </svg>
      <div className="mt-3 text-xs text-neutral-400">Unified Auth (Wasper ID) with tenant-scoped roles; optional SSO; shift-based access control.</div>
    </div>
  );
}
