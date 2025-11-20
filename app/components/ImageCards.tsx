"use client";

import React from "react";
import Image from "next/image";

const images = [
  "/Gemini_Generated_Image_7hi0xl7hi0xl7hi0.png",
  "/Gemini_Generated_Image_8512008512008512.png",
  "/Gemini_Generated_Image_hqss8mhqss8mhqss.png",
  "/Gemini_Generated_Image_u3bza6u3bza6u3bz.png",
];

export function ImageCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Card Style 1: Elevated with Shadow */}
      <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={images[0]}
            alt="Generated image 1"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-lg font-bold text-gray-900">
            Elevated Card
          </h3>
          <p className="text-sm text-gray-600">
            Classic design with deep shadow and elegant hover effect.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
              Style 1
            </span>
          </div>
        </div>
      </div>

      {/* Card Style 2: Border Gradient */}
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-[2px] transition-all duration-300 hover:p-[3px]">
        <div className="relative h-full overflow-hidden rounded-xl bg-white">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={images[1]}
              alt="Generated image 2"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-lg font-bold text-gray-900">
              Gradient Border
            </h3>
            <p className="text-sm text-gray-600">
              Border effect with vibrant gradient and subtle animation.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-700">
                Style 2
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Style 3: Glass Morphism */}
      <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 hover:bg-white/20">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={images[2]}
            alt="Generated image 3"
            fill
            className="object-cover opacity-90 transition-all duration-500 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="relative p-6 text-white">
          <h3 className="mb-2 text-lg font-bold">Glass Morphism</h3>
          <p className="text-sm text-white/80">
            Frosted glass effect with modern transparency.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              Style 3
            </span>
          </div>
        </div>
      </div>

      {/* Card Style 4: Minimal with Hover Effect */}
      <div className="group overflow-hidden rounded-xl border-2 border-gray-200 bg-white transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
          <Image
            src={images[3]}
            alt="Generated image 4"
            fill
            className="object-cover mix-blend-multiply transition-all duration-500 group-hover:mix-blend-normal"
          />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-lg font-bold text-gray-900">
            Minimal
          </h3>
          <p className="text-sm text-gray-600">
            Clean design with subtle border and transform on hover.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              Style 4
            </span>
          </div>
        </div>
      </div>

      {/* Card Style 5: Neon Effect */}
      <div className="group relative overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all duration-300 hover:shadow-cyan-500/50">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={images[0]}
            alt="Generated image 5"
            fill
            className="object-cover opacity-75 transition-opacity duration-500 group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-lg font-bold text-white">Neon Effect</h3>
          <p className="text-sm text-gray-300">
            Cyberpunk style with neon glows and dark background.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full border border-cyan-400 bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300">
              Style 5
            </span>
          </div>
        </div>
      </div>

      {/* Card Style 6: Overlay Text */}
      <div className="group relative h-64 overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl">
        <Image
          src={images[1]}
          alt="Generated image 6"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="mb-2 text-xl font-bold">Overlay Text</h3>
          <p className="text-sm text-gray-200">
            Overlaid text with dark gradient for maximum readability.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              Style 6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
