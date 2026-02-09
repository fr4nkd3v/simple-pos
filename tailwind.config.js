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
        'register-payment-control-offset': 'calc(var(--height-navbar))',
      },
      height: { navbar: 'var(--height-navbar)' },
      boxShadow: {
        card: '0 0 20px 0 rgba(0,0,0,.1), 0 10px 20px 0 rgba(0,0,0,.1)',
      },
    },
  },
  plugins: [],
};
