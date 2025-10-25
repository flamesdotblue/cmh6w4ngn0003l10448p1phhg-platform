import React from "react";

export default function Logo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Luxury HMS Gold Logo">
      <defs>
        <linearGradient id="gold" x1="0" x2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="12" fill="#0b0b0b" stroke="#a16207" strokeWidth="2" />
      <g transform="translate(8,8)">
        <path d="M16 8h16a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V16a8 8 0 0 1 8-8z" fill="url(#gold)" opacity="0.15" />
        <path d="M24 6c1.105 0 2 .895 2 2v10h10a2 2 0 1 1 0 4H26v10a2 2 0 1 1-4 0V22H12a2 2 0 1 1 0-4h10V8c0-1.105.895-2 2-2z" fill="url(#gold)" />
        <circle cx="24" cy="24" r="20" stroke="url(#gold)" strokeWidth="1.5" fill="none" opacity="0.35" />
      </g>
    </svg>
  );
}
