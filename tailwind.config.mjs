/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        hud: {
          bg: '#060709',
          card: '#0a0c10',
          'card-hover': '#10131a',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-bright': 'rgba(255, 255, 255, 0.2)',
          tag: 'rgba(255, 255, 255, 0.04)',
          text: '#e2e8f0',
          muted: '#848d9a',
          accent: '#ffffff',
        },
      },
      fontFamily: {
        mono: [
          'JetBrains Mono',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      letterSpacing: {
        hud: '0.15em',
        'hud-wide': '0.25em',
      },
      boxShadow: {
        'hud': '0 0 0 1px rgba(255, 255, 255, 0.08)',
        'hud-glow': '0 0 30px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};
