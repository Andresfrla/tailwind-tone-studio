"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  isDarkMode?: boolean;
}

export function SectionTitle({ icon: Icon, title, description, isDarkMode = false }: SectionTitleProps) {
  return (
    <div className="flex items-start gap-3 mb-6">
      <div className="shrink-0 rounded-lg bg-linear-to-br from-purple-500 to-indigo-600 p-2.5 shadow-lg">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{title}</h2>
        {description && (
          <p className={`mt-1 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{description}</p>
        )}
      </div>
    </div>
  );
}
