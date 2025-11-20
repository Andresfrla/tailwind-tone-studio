import React from "react";
import { SectionCard, Pill } from "./shared";
import { PaletteEntry } from "../lib/colors";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { RotateCw, Copy } from "lucide-react";

type Props = {
  activeHex: string;
  hexInput: string;
  isValid: boolean;
  lightAccent: string;
  darkBase: string;
  palette: PaletteEntry[];
  onHexChange: (value: string) => void;
  onRandom: () => void;
  onCopyPalette: (value: string) => void;
  fontVar: string;
  onFontChange: (value: string) => void;
};

export const ControlsPanel = ({
  activeHex,
  hexInput,
  isValid,
  lightAccent,
  darkBase,
  palette,
  onHexChange,
  onRandom,
  onCopyPalette,
  fontVar,
  onFontChange,
}: Props) => {
  const fontOptions = [
    { label: "Geist Sans", value: "--font-geist-sans" },
    { label: "Poppins", value: "--font-poppins" },
    { label: "Inter", value: "--font-inter" },
    { label: "Lora", value: "--font-lora" },
    { label: "Space Grotesk", value: "--font-space-grotesk" },
    { label: "Manrope", value: "--font-manrope" },
    { label: "DM Sans", value: "--font-dm-sans" },
    { label: "Work Sans", value: "--font-work-sans" },
    { label: "Nunito", value: "--font-nunito" },
    { label: "Montserrat", value: "--font-montserrat" },
  ];

  return (
    <SectionCard
      title="Base color"
      subtitle="Type a HEX value or pick visually. Palette updates instantly."
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">
            Primary hue
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-inner shadow-slate-200/60">
            <input
              aria-label="Color picker"
              type="color"
              value={activeHex}
              className="h-11 w-11 cursor-pointer rounded-xl border border-slate-200 bg-white p-1 shadow-sm"
              onChange={(event) => onHexChange(event.target.value)}
            />
            <Input
              aria-label="Hex input"
              value={hexInput}
              onChange={(event) => onHexChange(event.target.value)}
              placeholder="#22C55E"
            />
          </div>
          {!isValid ? (
            <span className="text-sm text-rose-500">
              Enter a valid HEX color (e.g. #22C55E or 16a34a).
            </span>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">
            Page font
          </label>
          <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-inner shadow-slate-200/60">
            <select
              aria-label="Selector de fuente"
              value={fontVar}
              onChange={(event) => onFontChange(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm focus:border-slate-300 focus:outline-none"
              style={{ fontFamily: `var(${fontVar}), system-ui, sans-serif` }}
            >
              {fontOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" onClick={onRandom}>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm shadow-slate-900/25">
              <RotateCw className="h-4 w-4" />
            </span>
            Generate random
          </Button>
          <Button
            onClick={() => onCopyPalette(palette.map((p) => p.hex).join(", "))}
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy palette
          </Button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-linear-to-r from-white via-white to-slate-50 p-4 shadow-inner shadow-slate-200/70">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <div className="flex flex-wrap gap-2">
                <Pill>base {activeHex}</Pill>
                <Pill>200 {lightAccent}</Pill>
                <Pill>700 {darkBase}</Pill>
              </div>
              <p className="text-sm text-slate-500">
                Shades are balanced using HSL deltas that mirror Tailwind steps for quick drop-in themes.
              </p>
            </div>
            <div
              className="hidden h-16 w-16 rounded-2xl border border-slate-200 shadow-inner shadow-slate-200/70 sm:block"
              style={{
                background: `linear-gradient(135deg, ${lightAccent}, ${darkBase})`,
              }}
            />
          </div>
        </div>
      </div>
    </SectionCard>
  );
};
