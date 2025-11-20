import React from "react";
import { SectionCard, Pill } from "./shared";

type Props = {
  lightAccent: string;
  darkBase: string;
};

export const AccessibilityPanel = ({ lightAccent, darkBase }: Props) => {
  return (
    <SectionCard
      title="Accessibility hints"
      subtitle="Pair light/dark swatches to maintain contrast."
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-inner shadow-slate-200/70">
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-xl border border-slate-200 shadow-inner shadow-slate-200/60"
              style={{
                background: `linear-gradient(135deg, ${lightAccent}, ${darkBase})`,
              }}
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900">
                Light/Dark pairing
              </span>
              <span className="text-xs text-slate-500">
                Use {lightAccent} on subtle backgrounds and {darkBase} for text/icons.
              </span>
            </div>
          </div>
          <Pill>AA-friendly</Pill>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <span className="font-semibold text-slate-800">Button</span>
            <div
              className="mt-2 h-9 rounded-lg text-white"
              style={{ backgroundColor: darkBase }}
            />
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <span className="font-semibold text-slate-800">Surface</span>
            <div
              className="mt-2 h-9 rounded-lg border border-slate-200"
              style={{ backgroundColor: `${lightAccent}33` }}
            />
          </div>
        </div>
        <p className="text-xs text-slate-500">
          Use the full 50-950 shade range to ensure proper contrast across all UI elements.
        </p>
      </div>
    </SectionCard>
  );
};
