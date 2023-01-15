/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,tsx,jsx,ts}"],
  theme: {
    extend: {
      fontSize: {
        '5xl': ['3rem', {
          lineHeight: '4.2rem',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        'xl': ['11px', {
          letterSpacing: '-0.01em',
        }],
      },
      fontFamily: {
        'inter': ['Inter'],
      },
    }
  },
  plugins: [],
}
