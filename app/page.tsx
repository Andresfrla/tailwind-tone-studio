"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { buildPalette, normalizeHex, randomHex } from "./lib/colors";
import { ColorHeader } from "./components/ColorHeader";
import { ControlsPanel } from "./components/ControlsPanel";
import { PaletteGrid } from "./components/PaletteGrid";
import { PreviewPanel } from "./components/PreviewPanel";
import { AccessibilityPanel } from "./components/AccessibilityPanel";
import { ColorCarousel } from "./components/ColorCarousel";
import { SectionTitle } from "./components/SectionTitle";
import { StatCards } from "./components/StatCards";
import { TypographyShowcase } from "./components/TypographyShowcase";
import {
  TrendingUp,
  Palette,
  Type
} from "lucide-react";

const DEFAULT_COLOR = "#22c55e";

export default function Home() {
  const [hexInput, setHexInput] = useState(DEFAULT_COLOR);
  const [activeHex, setActiveHex] = useState(DEFAULT_COLOR);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [shadowIntensity, setShadowIntensity] = useState(1);

  const palette = useMemo(() => buildPalette(activeHex), [activeHex]);

  const handleHexChange = (value: string) => {
    setHexInput(value);
    const normalized = normalizeHex(value);
    if (normalized) {
      setActiveHex(normalized);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleCopyHex = async (value: string) => {
    if (!navigator?.clipboard) return;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // ignore copy issues silently
    }
    setCopiedHex(value);
    setTimeout(() => setCopiedHex(null), 1200);
  };

  const handleRandom = () => {
    const next = randomHex();
    setHexInput(next);
    setActiveHex(next);
    setIsValid(true);
  };

  const darkBase = palette.find((p) => p.stop === 700)?.hex ?? activeHex;
  const lightAccent = palette.find((p) => p.stop === 200)?.hex ?? activeHex;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode
        ? "bg-gradient-to-br from-gray-900 to-gray-800"
        : "bg-gradient-to-br from-gray-50 to-gray-100"
    }`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-10">
        <ColorHeader isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

        <div className="grid gap-5 lg:grid-cols-[360px,1fr]">
          <ControlsPanel
            activeHex={activeHex}
            hexInput={hexInput}
            isValid={isValid}
            lightAccent={lightAccent}
            darkBase={darkBase}
            palette={palette}
            onHexChange={handleHexChange}
            onRandom={handleRandom}
            onCopyPalette={handleCopyHex}
          />
          <div className="space-y-5">
            <PaletteGrid
              palette={palette}
              copiedHex={copiedHex}
              onCopyHex={handleCopyHex}
            />
            <div className="grid gap-4 md:grid-cols-2">
              <PreviewPanel
                activeHex={activeHex}
                lightAccent={lightAccent}
                darkBase={darkBase}
              />
              <AccessibilityPanel
                lightAccent={lightAccent}
                darkBase={darkBase}
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="mt-8">
          <SectionTitle
            icon={TrendingUp}
            title="Statistics Overview"
            description="Monitor key metrics with your color palette"
            isDarkMode={isDarkMode}
          />
          <StatCards palette={palette} isDarkMode={isDarkMode} />
        </section>

        {/* Typography Section */}
        <section className="mt-8">
          <SectionTitle
            icon={Type}
            title="Typography Showcase"
            description="Explore font sizes and color combinations with your selected palette"
            isDarkMode={isDarkMode}
          />
          <TypographyShowcase
            palette={palette}
            shadowIntensity={shadowIntensity}
            onShadowChange={setShadowIntensity}
          />
        </section>

        {/* Additional Examples Section */}
        <section className="mt-8">
          <SectionTitle
            icon={Palette}
            title="Extra Components"
            description="More UI examples with your color palette"
            isDarkMode={isDarkMode}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {/* Button Examples */}
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-4 text-sm font-semibold text-gray-900">Buttons</h3>
              <div className="space-y-3">
                <button
                  className="w-full rounded-lg px-4 py-2.5 font-medium text-white transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: activeHex }}
                >
                  Primary Button
                </button>
                <button
                  className="w-full rounded-lg border-2 px-4 py-2.5 font-medium transition-all duration-200 hover:scale-105"
                  style={{ borderColor: activeHex, color: activeHex }}
                >
                  Outline Button
                </button>
                <button
                  className="w-full rounded-lg px-4 py-2.5 font-medium transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: lightAccent, color: darkBase }}
                >
                  Soft Button
                </button>
              </div>
            </div>

            {/* Badge Examples */}
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-4 text-sm font-semibold text-gray-900">Badges</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium text-white"
                  style={{ backgroundColor: activeHex }}
                >
                  New
                </span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: lightAccent, color: darkBase }}
                >
                  Popular
                </span>
                <span
                  className="rounded-full border-2 px-3 py-1 text-xs font-medium"
                  style={{ borderColor: activeHex, color: activeHex }}
                >
                  Featured
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  Tag
                </span>
              </div>
              <div className="flex items-center -space-x-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-md transition-transform hover:scale-110 hover:z-10">
                  <Image
                    src="/Gemini_Generated_Image_7hi0xl7hi0xl7hi0.png"
                    alt="User 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-md transition-transform hover:scale-110 hover:z-10">
                  <Image
                    src="/Gemini_Generated_Image_8512008512008512.png"
                    alt="User 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-md transition-transform hover:scale-110 hover:z-10">
                  <Image
                    src="/Gemini_Generated_Image_hqss8mhqss8mhqss.png"
                    alt="User 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-md transition-transform hover:scale-110 hover:z-10">
                  <Image
                    src="/Gemini_Generated_Image_u3bza6u3bza6u3bz.png"
                    alt="User 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-4 text-sm font-semibold text-gray-900">Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-xs font-medium text-gray-700">
                    <span>Completed</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ backgroundColor: activeHex, width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs font-medium text-gray-700">
                    <span>In Progress</span>
                    <span>45%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ backgroundColor: lightAccent, width: "45%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette Carousel Section - At the End */}
        <section className="mt-8">
          <SectionTitle
            icon={Palette}
            title="Color Palette Mixes"
            description="Explore different tone combinations and gradients"
            isDarkMode={isDarkMode}
          />
          <ColorCarousel />
        </section>
      </div>
    </div>
  );
}
