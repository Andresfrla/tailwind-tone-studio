import React from "react";
import { SectionCard } from "./shared";
import { PaletteEntry } from "../lib/colors";

type Props = {
  palette: PaletteEntry[];
  copiedHex: string | null;
  onCopyHex: (value: string) => void;
};

export const PaletteGrid = ({ palette, copiedHex, onCopyHex }: Props) => {
  return (
    <SectionCard
      title="Tailwind scale"
      subtitle="Click any swatch to copy its HEX. Fits the 50-950 system Tailwind expects."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {palette.map((shade) => (
          <button
            key={shade.stop}
            onClick={() => onCopyHex(shade.hex)}
            style={{ backgroundColor: shade.hex, color: shade.text }}
            className="group flex h-28 flex-col justify-between rounded-2xl border border-slate-900/5 p-3 text-left shadow-sm shadow-slate-900/10 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.08em]">
              <span>{shade.stop}</span>
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] backdrop-blur">
                Tailwind
              </span>
            </div>
            <div className="flex flex-col gap-1 text-sm font-semibold">
              <span className="inline-flex items-center gap-1 rounded-lg bg-black/10 px-2 py-1 text-[12px]">
                {shade.hex}
                {copiedHex === shade.hex ? (
                  <span className="text-[11px] opacity-90">✓</span>
                ) : (
                  <span className="opacity-70">⧉</span>
                )}
              </span>
              <span className="text-[11px] font-medium opacity-80">
                Click to copy
              </span>
            </div>
          </button>
        ))}
      </div>
    </SectionCard>
  );
};
