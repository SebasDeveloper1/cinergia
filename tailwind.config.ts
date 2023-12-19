import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS Configuration
 *
 * This file defines the configuration for Tailwind CSS, a utility-first CSS framework.
 * It extends the default theme with a custom color palette.
 *
 * @see https://tailwindcss.com/docs/configuration
 * @type {Config}
 */

const colorPalette = {
  customDark: {
    '50': '#ffffff',
    '100': '#e6e6e6',
    '200': '#cccccc',
    '300': '#b3b3b3',
    '400': '#999999',
    '500': '#808080',
    '600': '#666666',
    '700': '#4d4d4d',
    '800': '#333333',
    '900': '#1a1a1a',
    '950': '#000000',
  },
  customGray: {
    '50': '#f9fafb',
    '100': '#f3f4f6',
    '200': '#e5e7eb',
    '300': '#d1d5db',
    '400': '#9ca3af',
    '500': '#6b7280',
    '600': '#4b5563',
    '700': '#374151',
    '800': '#1f2937',
    '900': '#111827',
    '950': '#030712',
  },
  customNeutral: {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#e5e5e5',
    '300': '#d4d4d4',
    '400': '#a3a3a3',
    '500': '#737373',
    '600': '#525252',
    '700': '#404040',
    '800': '#262626',
    '900': '#171717',
    '950': '#0a0a0a',
  },
  primary: {
    '50': '#c2d9f5',
    '100': '#a3c1eb',
    '200': '#84a9e2',
    '300': '#6581d8',
    '400': '#4769ce',
    '500': '#1775e8', // color de referencia
    '600': '#1260bf',
    '700': '#0d4b9c',
    '800': '#093677',
    '900': '#042255',
    '950': '#000e33',
  },
  secondary: {
    '50': '#a3d9a0',
    '100': '#8ac987',
    '200': '#71bf6f',
    '300': '#58a556',
    '400': '#3f8b3d',
    '500': '#3dbf38', // color de referencia
    '600': '#349e31',
    '700': '#2b7d29',
    '800': '#225c22',
    '900': '#183b1a',
    '950': '#0e1a11',
  },
  accent: {
    '50': '#fde6ea',
    '100': '#f9bcc2',
    '200': '#f3919a',
    '300': '#ef6773',
    '400': '#eb3d4b',
    '500': '#e82e54', // color de referencia
    '600': '#e50435',
    '700': '#c1032c',
    '800': '#990227',
    '900': '#6e011d',
    '950': '#430113',
  },
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: colorPalette.customDark,
        light: colorPalette.customDark,
        customGray: colorPalette.customGray,
        customNeutral: colorPalette.customNeutral,
        primary: colorPalette.primary,
        secondary: colorPalette.secondary,
        accent: colorPalette.accent,
        textColorPrimary: colorPalette.primary,
        textColorSecondary: colorPalette.secondary,
        textColorAccent: colorPalette.accent,
        textColorNeutral: colorPalette.customDark,
        bgPrimaryDark: colorPalette.customDark[950],
        bgSecondaryDark: colorPalette.customDark[900],
        borderPrimaryDark: colorPalette.customDark[50],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
