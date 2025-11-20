"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TypographyShowcaseProps {
  palette: Array<{ stop: number; hex: string }>;
  shadowIntensity: number;
  onShadowChange: (value: number) => void;
}

const images = [
  "/Gemini_Generated_Image_7hi0xl7hi0xl7hi0.png",
  "/Gemini_Generated_Image_8512008512008512.png",
  "/Gemini_Generated_Image_hqss8mhqss8mhqss.png",
  "/Gemini_Generated_Image_u3bza6u3bza6u3bz.png",
];

export function TypographyShowcase({ palette, shadowIntensity, onShadowChange }: TypographyShowcaseProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const color50 = palette.find((p) => p.stop === 50)?.hex || "#f0fdf4";
  const color100 = palette.find((p) => p.stop === 100)?.hex || "#dcfce7";
  const color200 = palette.find((p) => p.stop === 200)?.hex || "#bbf7d0";
  const color400 = palette.find((p) => p.stop === 400)?.hex || "#4ade80";
  const color500 = palette.find((p) => p.stop === 500)?.hex || "#22c55e";
  const color600 = palette.find((p) => p.stop === 600)?.hex || "#16a34a";
  const color700 = palette.find((p) => p.stop === 700)?.hex || "#15803d";
  const color800 = palette.find((p) => p.stop === 800)?.hex || "#166534";
  const color900 = palette.find((p) => p.stop === 900)?.hex || "#14532d";

  const getShadowClass = () => {
    if (shadowIntensity === 0) return "";
    if (shadowIntensity <= 0.5) return "shadow-sm";
    if (shadowIntensity <= 1) return "shadow-md";
    if (shadowIntensity <= 1.5) return "shadow-lg";
    if (shadowIntensity <= 2) return "shadow-xl";
    return "shadow-2xl";
  };

  const shadowClass = getShadowClass();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1: Radio Inputs with Image */}
      <div
        className={`overflow-hidden rounded-2xl ${shadowClass} transition-all duration-300`}
        style={{ backgroundColor: color50 }}
      >
        <div className="relative h-32 w-full overflow-hidden">
          <Image
            src={images[0]}
            alt="Radio options example"
            fill
            className="object-cover opacity-90"
          />
        </div>
        <div className="p-6">
          <h3
            className="mb-4 text-lg font-bold"
            style={{ color: color800 }}
          >
            Radio Options
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="option"
                  defaultChecked
                  className="peer sr-only"
                />
                <div
                  className="h-4 w-4 rounded-full border-2 peer-checked:border-[5px] transition-all"
                  style={{
                    borderColor: color600,
                  }}
                />
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: color800 }}
              >
                Primary
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="option"
                  className="peer sr-only"
                />
                <div
                  className="h-4 w-4 rounded-full border-2 peer-checked:border-[5px] transition-all"
                  style={{
                    borderColor: color600,
                  }}
                />
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: color700 }}
              >
                Secondary
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="option"
                  className="peer sr-only"
                />
                <div
                  className="h-4 w-4 rounded-full border-2 peer-checked:border-[5px] transition-all"
                  style={{
                    borderColor: color600,
                  }}
                />
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: color700 }}
              >
                Tertiary
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Card 2: Image with Dark Background */}
      <div
        className={`group relative overflow-hidden rounded-2xl ${shadowClass} transition-all duration-300`}
        style={{ backgroundColor: color900 }}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={images[1]}
            alt="Contrast example 2"
            fill
            className="object-cover opacity-80 transition-all duration-500 group-hover:opacity-90"
          />
        </div>
        <div className="p-6">
          <h3
            className="mb-2 text-xl font-bold"
            style={{ color: color100 }}
          >
            Dark Background
          </h3>
          <p
            className="text-sm"
            style={{ color: color200 }}
          >
            Deep background with light text creates strong contrast.
          </p>
        </div>
      </div>

      {/* Card 3: Image with Gradient Overlay */}
      <div className={`group relative overflow-hidden rounded-2xl ${shadowClass} transition-all duration-300`}>
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={images[2]}
            alt="Contrast example 3"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${color500}40, ${color700}60)`,
            }}
          ></div>
        </div>
        <div className="p-6 bg-white">
          <h3
            className="mb-2 text-xl font-bold"
            style={{ color: color800 }}
          >
            Gradient Overlay
          </h3>
          <p
            className="text-sm mb-3"
            style={{ color: color700 }}
          >
            Color overlay blends with image for unique effect.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: color600 }}
          >
            Modal
          </button>
        </div>
      </div>

      {/* Card 4: Image with Colored Background */}
      <div
        className={`group relative overflow-hidden rounded-2xl ${shadowClass} transition-all duration-300`}
        style={{ backgroundColor: color600 }}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={images[3]}
            alt="Contrast example 4"
            fill
            className="object-cover opacity-75 transition-opacity duration-500 group-hover:opacity-85"
          />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-white">
            Vibrant Background
          </h3>
          <p className="text-sm text-white/90">
            Bold color background with white text for maximum impact.
          </p>
        </div>
      </div>

      {/* Card 5: Search Interface */}
      <div
        className={`overflow-hidden rounded-2xl bg-gray-900 p-6 ${shadowClass} transition-all duration-300`}
      >
        <div className="mb-4 flex items-center gap-3 rounded-lg bg-gray-800 px-4 py-3">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent text-sm text-gray-300 outline-none placeholder:text-gray-500"
          />
          <span
            className="rounded px-2 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: color600 }}
          >
            12 results
          </span>
        </div>

        <div className="mb-3 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3">
          <div className="mb-1 flex items-center gap-2 text-xs text-gray-400">
            <span
              className="font-semibold"
              style={{ color: color400 }}
            >
              https://
            </span>
            <span>example.com</span>
          </div>
        </div>

        <div className="mb-3 rounded-lg bg-gray-800 px-4 py-3">
          <p className="text-sm text-gray-300">Ask, Search or Chat...</p>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-gray-800 px-4 py-3">
          <div className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: color600 }}
            >
              A
            </div>
            <span className="text-sm text-gray-300">Auto</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">52% used</span>
            <button className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-700">
              <svg
                className="h-4 w-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Card 6: Calendar */}
      <div
        className={`overflow-hidden rounded-2xl bg-white p-6 ${shadowClass} transition-all duration-300`}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">December 2024</h3>
          <div
            className="rounded-lg px-3 py-1 text-xs font-semibold text-white"
            style={{ backgroundColor: color600 }}
          >
            Today
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
            <div
              key={i}
              className="text-center text-xs font-semibold text-gray-500 p-2"
            >
              {day}
            </div>
          ))}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((date) => (
            <div
              key={date}
              className={`text-center text-xs p-2 rounded-lg cursor-pointer transition-all ${
                date === 15
                  ? "font-bold text-white"
                  : date === 10 || date === 25
                  ? "font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              style={
                date === 15
                  ? { backgroundColor: color600 }
                  : date === 10 || date === 25
                  ? { backgroundColor: color100, color: color800 }
                  : {}
              }
            >
              {date}
            </div>
          ))}
        </div>
      </div>

      {/* Card 7: Gradient Text with Shadow Control */}
      <div
        className={`overflow-hidden rounded-2xl bg-white p-8 ${shadowClass} transition-all duration-300`}
      >
        <div
          className="mb-3 text-4xl font-black"
          style={{
            background: `linear-gradient(135deg, ${color500}, ${color700})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Gradient
        </div>
        <p className="mb-2 text-sm font-medium text-gray-700">
          Linear Gradient Text Effect
        </p>
        <p className="mb-6 text-xs text-gray-500">
          From 500 to 700
        </p>

        <div className="pt-6 border-t border-gray-200">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Shadow Intensity
            </label>
            <span className="text-xs font-semibold text-white rounded-full px-2 py-1"
              style={{ backgroundColor: color600 }}
            >
              {shadowIntensity.toFixed(1)}x
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="2.5"
            step="0.1"
            value={shadowIntensity}
            onChange={(e) => onShadowChange(parseFloat(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, ${color200} 0%, ${color600} 100%)`,
              accentColor: color600
            }}
          />
          <div className="mt-2 flex justify-between text-xs text-gray-400">
            <span>None</span>
            <span>Maximum</span>
          </div>
        </div>
      </div>

      {/* Card 8: Color Scale */}
      <div
        className={`overflow-hidden rounded-2xl p-8 ${shadowClass} transition-all duration-300`}
        style={{ backgroundColor: color800 }}
      >
        <h3 className="mb-4 text-lg font-bold text-white">
          Color Variants
        </h3>
        <div className="space-y-2">
          <div
            className="rounded-lg px-3 py-2 text-sm font-medium"
            style={{ backgroundColor: color200, color: color900 }}
          >
            Light Shade
          </div>
          <div
            className="rounded-lg px-3 py-2 text-sm font-medium"
            style={{ backgroundColor: color500, color: "white" }}
          >
            Base Color
          </div>
          <div
            className="rounded-lg px-3 py-2 text-sm font-medium"
            style={{ backgroundColor: color700, color: color50 }}
          >
            Dark Shade
          </div>
        </div>
      </div>

      {/* Card 9: Size Scale */}
      <div
        className={`overflow-hidden rounded-2xl bg-white p-8 ${shadowClass} transition-all duration-300`}
      >
        <h3 className="mb-4 text-lg font-bold text-gray-900">Text Sizes</h3>
        <div className="space-y-2">
          <p
            className="text-xs"
            style={{ color: color700 }}
          >
            Extra Small - 12px
          </p>
          <p
            className="text-sm"
            style={{ color: color700 }}
          >
            Small - 14px
          </p>
          <p
            className="text-base"
            style={{ color: color700 }}
          >
            Base - 16px
          </p>
          <p
            className="text-lg"
            style={{ color: color700 }}
          >
            Large - 18px
          </p>
          <p
            className="text-xl"
            style={{ color: color700 }}
          >
            Extra Large - 20px
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Color Palette</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full p-2 hover:bg-gray-100 transition-colors"
                >
                  <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                {palette.map((color) => (
                  <div key={color.stop} className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all">
                    <div
                      className="h-16 w-16 rounded-lg shadow-md"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{color.stop}</p>
                      <p className="text-xs text-gray-500 font-mono">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full rounded-lg px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: color600 }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
