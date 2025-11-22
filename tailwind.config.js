/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        geist: ['"Geist Sans"', 'sans-serif'],
      },
      inset: {
        'current-order-offset': 'calc(var(--height-navbar) + 1.25rem)',
      },
      height: { navbar: 'var(--height-navbar)' },
    },
  },
  plugins: [],
};

