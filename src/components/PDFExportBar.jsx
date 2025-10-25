import React from "react";
import { Printer } from "lucide-react";

export default function PDFExportBar() {
  const onPrint = () => {
    if (typeof window !== "undefined") window.print();
  };
  return (
    <div className="sticky top-16 z-40 bg-neutral-950/80 backdrop-blur border-b border-neutral-800 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-end gap-2">
        <button
          onClick={onPrint}
          className="inline-flex items-center gap-2 rounded-md border border-yellow-500/40 bg-neutral-900/50 px-3 py-1.5 text-yellow-300 hover:bg-neutral-800 text-sm"
        >
          <Printer className="w-4 h-4" /> Export PRD to PDF
        </button>
      </div>
    </div>
  );
}
