/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d2221',
        secondary: '#252827',
        tertiary: '#313736',
        textPrimary: '#FFFFFF',
        textSecondary: '#B4BDBB',
        textTertiary: '#6A7876',
        myBlue: '#0169FF',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
