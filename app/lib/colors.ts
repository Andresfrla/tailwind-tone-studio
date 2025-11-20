export const TAILWIND_STOPS = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
];

const LIGHTNESS_DELTAS: Record<number, number> = {
  50: 0.35,
  100: 0.28,
  200: 0.22,
  300: 0.16,
  400: 0.08,
  500: 0,
  600: -0.08,
  700: -0.16,
  800: -0.24,
  900: -0.32,
  950: -0.4,
};

type Hsl = { h: number; s: number; l: number };
export type PaletteEntry = { stop: number; hex: string; text: string };

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

const hexToHsl = (hex: string): Hsl => {
  const stripped = hex.replace("#", "");
  const r = parseInt(stripped.slice(0, 2), 16) / 255;
  const g = parseInt(stripped.slice(2, 4), 16) / 255;
  const b = parseInt(stripped.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === r) {
      h = ((g - b) / delta) % 6;
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }
    h *= 60;
  }

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return { h: (h + 360) % 360, s, l };
};

const hslToHex = (h: number, s: number, l: number) => {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }

  const toHex = (value: number) =>
    Math.round((value + m) * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
};

export const normalizeHex = (value: string) => {
  const cleaned = value.trim().replace("#", "");
  if (/^[0-9a-fA-F]{3}$/.test(cleaned)) {
    const expanded = cleaned
      .split("")
      .map((ch) => ch + ch)
      .join("");
    return `#${expanded.toUpperCase()}`;
  }
  if (/^[0-9a-fA-F]{6}$/.test(cleaned)) {
    return `#${cleaned.toUpperCase()}`;
  }
  return null;
};

export const randomHex = () => {
  const value = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
  return `#${value.toUpperCase()}`;
};

export const buildPalette = (hex: string): PaletteEntry[] => {
  const baseHsl = hexToHsl(hex);

  return TAILWIND_STOPS.map((stop) => {
    const delta = LIGHTNESS_DELTAS[stop] ?? 0;
    const lightness = clamp(baseHsl.l + delta);
    const saturationAdjustment =
      delta > 0 ? -Math.min(delta * 0.35, 0.16) : Math.min(Math.abs(delta) * 0.25, 0.12);

    const paletteHex = hslToHex(
      baseHsl.h,
      clamp(baseHsl.s + saturationAdjustment, 0.12, 0.92),
      lightness,
    );
    const text = lightness > 0.7 ? "#0F172A" : "#F8FAFC";

    return { stop, hex: paletteHex, text };
  });
};
