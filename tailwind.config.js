/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cold: {
          bg: '#030810',
          alt: '#020408',
        },
        cool: {
          bg: '#050b14',
          alt: '#061018',
        },
        neutral: {
          bg: '#0f172a',
          alt: '#1e293b',
        },
        warm: {
          bg: '#1a1a2e',
          alt: '#16213e',
        },
        hot: {
          bg: '#1a0a0a',
          alt: '#2a1515',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
