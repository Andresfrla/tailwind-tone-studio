import React from "react";
import { SectionCard } from "./shared";

type Props = {
  activeHex: string;
  lightAccent: string;
  darkBase: string;
};

export const PreviewPanel = ({ activeHex, lightAccent, darkBase }: Props) => {
  return (
    <SectionCard
      title="UI preview"
      subtitle="Component examples using your palette."
    >
      <div className="grid gap-3">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50">
          <div
            className="rounded-t-2xl px-4 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: darkBase }}
          >
            Card Example
          </div>
          <div className="space-y-3 px-4 py-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Balance</span>
              <span className="text-lg font-bold text-slate-900">
                $12,543
              </span>
            </div>
            <div
              className="h-2 w-full rounded-full bg-slate-100"
              style={{ backgroundColor: `${lightAccent}30` }}
            >
              <div
                className="h-2 rounded-full"
                style={{
                  width: "72%",
                  backgroundColor: activeHex,
                }}
              />
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs font-medium text-slate-500">
              <span className="rounded-xl bg-slate-50 px-3 py-2">
                200 {lightAccent}
              </span>
              <span className="rounded-xl bg-slate-50 px-3 py-2">
                500 {activeHex}
              </span>
              <span className="rounded-xl bg-slate-50 px-3 py-2">
                700 {darkBase}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold text-white shadow-sm shadow-slate-900/10"
            style={{ backgroundColor: activeHex }}
          >
            UI
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-900">
              Color System
            </p>
            <p className="text-xs text-slate-500">
              Balanced shades following design system best practices.
            </p>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            Ready
          </span>
        </div>
      </div>
    </SectionCard>
  );
};
