"use client";

import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  previousValue: string;
  trend: "up" | "down";
  color: string;
  chartData: number[];
  isDarkMode: boolean;
}

function StatCard({ title, value, previousValue, trend, color, chartData, isDarkMode }: StatCardProps) {
  const max = Math.max(...chartData);
  const min = Math.min(...chartData);
  const range = max - min || 1;

  const points = chartData.map((val, idx) => {
    const x = (idx / (chartData.length - 1)) * 100;
    const y = 100 - ((val - min) / range) * 100;
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
      isDarkMode ? "bg-gray-800" : "bg-white"
    }`}>
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{title}</h3>
          <p className={`mt-2 text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{value}</p>
          <div className="mt-1 flex items-center gap-1">
            <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{previousValue} last period</span>
          </div>
        </div>
        <div className={`rounded-full p-2 ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}>
          {trend === "up" ? (
            <TrendingUp className={`h-5 w-5 ${isDarkMode ? "text-gray-300" : "text-gray-400"}`} />
          ) : (
            <TrendingDown className={`h-5 w-5 ${isDarkMode ? "text-gray-300" : "text-gray-400"}`} />
          )}
        </div>
      </div>

      {/* Mini Chart */}
      <div className="relative h-16 w-full">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          {/* Gradient Fill */}
          <defs>
            <linearGradient id={`gradient-${title}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Area Fill */}
          <polygon
            points={`0,100 ${points} 100,100`}
            fill={`url(#gradient-${title})`}
          />

          {/* Line */}
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}

export function StatCards({ palette, isDarkMode }: { palette: Array<{ stop: number; hex: string }>; isDarkMode: boolean }) {
  const primaryColor = palette.find((p) => p.stop === 500)?.hex || "#22c55e";
  const accentColor = palette.find((p) => p.stop === 600)?.hex || "#16a34a";
  const lightColor = palette.find((p) => p.stop === 400)?.hex || "#4ade80";

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Income"
        value="$15,989"
        previousValue="$18,871"
        trend="down"
        color={primaryColor}
        chartData={[45, 52, 48, 55, 60, 58, 65, 62, 68, 65, 70, 68, 72, 70, 65]}
        isDarkMode={isDarkMode}
      />
      <StatCard
        title="Expenses"
        value="$12,543"
        previousValue="$10,221"
        trend="up"
        color={accentColor}
        chartData={[30, 35, 32, 38, 42, 45, 48, 52, 55, 58, 60, 63, 65, 68, 70]}
        isDarkMode={isDarkMode}
      />
      <StatCard
        title="Savings"
        value="$5,210"
        previousValue="10,221"
        trend="down"
        color={lightColor}
        chartData={[65, 62, 68, 64, 60, 58, 62, 59, 55, 52, 48, 45, 42, 38, 35]}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
