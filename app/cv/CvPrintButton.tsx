"use client";

export function CvPrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="cv-no-print inline-flex items-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-500 hover:bg-neutral-50"
    >
      {label}
    </button>
  );
}
