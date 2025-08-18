/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#1a152A',
        surface: '#221B3C',
        'accent-primary': '#8A63D2',
        'accent-hover': '#A278F4',
        'accent-secondary': '#50E3C2',
        'text-primary': '#E6E6E6',
        'text-secondary': '#A1A1AA',
        'border-muted': '#2C2C38',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
