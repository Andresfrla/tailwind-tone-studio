import React from "react";
import Image from "next/image";
import { Pill } from "./shared";
import { Palette, Moon, Sun } from "lucide-react";

interface ColorHeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const ColorHeader = ({ isDarkMode, onToggleDarkMode }: ColorHeaderProps) => {
  return (
    <header className={`flex flex-col gap-4 rounded-3xl border p-6 shadow-md backdrop-blur transition-colors duration-300 lg:flex-row lg:items-center lg:justify-between ${
      isDarkMode
        ? "border-gray-700/80 bg-gray-800/90 shadow-gray-900/50"
        : "border-slate-200/80 bg-white/90 shadow-slate-200/50"
    }`}>
      <div className="flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-md transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-700 text-white shadow-gray-900/20"
            : "bg-slate-900 text-white shadow-slate-900/20"
        }`}>
          <Palette className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <h1 className={`text-2xl font-semibold tracking-tight transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Tailwind Tone Studio
          </h1>
          <p className={`text-sm transition-colors duration-300 ${
            isDarkMode ? "text-gray-300" : "text-slate-600"
          }`}>
            Drop a HEX value or use the picker to spawn a full Tailwind scale with UI previews.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Pill>Auto shades 50 → 950</Pill>
        <Pill>Live preview</Pill>
        <button
          onClick={onToggleDarkMode}
          className={`flex h-9 items-center gap-2 rounded-full px-4 text-sm font-medium transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? "bg-gray-700 text-gray-100 hover:bg-gray-600"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <>
              <Sun className="h-4 w-4" />
              Light
            </>
          ) : (
            <>
              <Moon className="h-4 w-4" />
              Dark
            </>
          )}
        </button>
      </div>
    </header>
  );
};
