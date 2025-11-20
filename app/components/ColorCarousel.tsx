"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ColorMix {
  name: string;
  colors: string[];
  description: string;
}

const colorMixes: ColorMix[] = [
  {
    name: "Sunset Vibes",
    colors: ["#FF6B6B", "#FFA06B", "#FFD56B", "#FF8E53", "#FF5E78"],
    description: "Warm tones inspired by sunsets",
  },
  {
    name: "Ocean Deep",
    colors: ["#0A4D68", "#088395", "#05BFDB", "#00FFCA", "#7DD3FC"],
    description: "Ocean depths in gradient",
  },
  {
    name: "Forest Dreams",
    colors: ["#1B4D3E", "#2D6A4F", "#40916C", "#52B788", "#95D5B2"],
    description: "Natural and organic green",
  },
  {
    name: "Purple Haze",
    colors: ["#4A148C", "#6A1B9A", "#8E24AA", "#AB47BC", "#CE93D8"],
    description: "Mystical and elegant purples",
  },
  {
    name: "Neon Nights",
    colors: ["#FF006E", "#FB5607", "#FFBE0B", "#8338EC", "#3A86FF"],
    description: "Vibrant neon style colors",
  },
  {
    name: "Pastel Paradise",
    colors: ["#FFB4D1", "#FFC9E5", "#FFDFEA", "#D4A5A5", "#F8B4D9"],
    description: "Soft and delicate pastels",
  },
  {
    name: "Earthy Tones",
    colors: ["#8B4513", "#A0522D", "#D2691E", "#CD853F", "#DEB887"],
    description: "Earth and nature",
  },
  {
    name: "Ice Cold",
    colors: ["#E0F2FE", "#BAE6FD", "#7DD3FC", "#38BDF8", "#0EA5E9"],
    description: "Glacial freshness in blues",
  },
  {
    name: "Fire & Gold",
    colors: ["#DC2626", "#EF4444", "#F97316", "#FBBF24", "#FDE047"],
    description: "Burning fire to bright gold",
  },
  {
    name: "Midnight Sky",
    colors: ["#0F172A", "#1E293B", "#334155", "#475569", "#64748B"],
    description: "Nighttime sky grays",
  },
];

export function ColorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % colorMixes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + colorMixes.length) % colorMixes.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="relative h-[400px] p-8">
          {/* Color Display */}
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              {colorMixes[currentIndex].name}
            </h3>
            <p className="text-sm text-gray-600">
              {colorMixes[currentIndex].description}
            </p>
          </div>

          {/* Color Cards */}
          <div className="mb-6 flex justify-center gap-3">
            {colorMixes[currentIndex].colors.map((color, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
              >
                <div
                  className="h-32 w-20 rounded-xl shadow-lg transition-shadow duration-300 group-hover:shadow-2xl"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="mt-2 rounded-md bg-gray-100 px-2 py-1 text-xs font-mono font-medium text-gray-700">
                  {color}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient Preview */}
          <div className="mx-auto h-16 w-full max-w-2xl overflow-hidden rounded-xl shadow-inner">
            <div
              className="h-full w-full"
              style={{
                background: `linear-gradient(to right, ${colorMixes[currentIndex].colors.join(", ")})`,
              }}
            ></div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all duration-200 hover:bg-white hover:scale-110"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all duration-200 hover:bg-white hover:scale-110"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="mt-6 flex justify-center gap-2">
        {colorMixes.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-gray-800"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Preview */}
      <div className="mt-6 overflow-x-auto">
        <div className="flex gap-3 pb-2">
          {colorMixes.map((mix, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentIndex
                  ? "ring-4 ring-gray-800 ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <div className="flex h-16 w-32 overflow-hidden rounded-lg">
                {mix.colors.map((color, colorIdx) => (
                  <div
                    key={colorIdx}
                    className="h-full flex-1 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              <p className="mt-1 text-xs font-medium text-gray-700">
                {mix.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
