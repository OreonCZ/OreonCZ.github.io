/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090d16',
        surface: '#111726',
        'surface-hover': '#192238',
        border: 'rgba(255, 255, 255, 0.08)',
        accent: {
          DEFAULT: '#6366f1', // Indigo
          hover: '#4f46e5',
          light: '#818cf8',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      boxShadow: {
        'glow': '0 0 50px -12px rgba(99, 102, 241, 0.25)',
        'glow-lg': '0 0 80px -15px rgba(99, 102, 241, 0.35)',
      },
    },
  },
  plugins: [],
};
