/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import switcher from 'tailwind-theme-switcher';
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './templates/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      darkViolet: '#7C5DFA',
      lightViolet: '#9277FF',
      midDark: '#1E2139',
      darkGrey: '#252945',
      purpleLight: '#DFE3FA',
      lightGrey: '#888EB0',
      midPurple: '#7E88C3',
      deepBlack: '#0C0E16',
      deepestBlack: '#141625',
      brandRed: '#EC5757',
      lightRed: '#9277FF',
      lightBG: '#F8F8FB',
    },
    fontFamily: {
      spartan: ['League Spartan', 'sans-serif'],
    },
    screens: {
      tablet: '768px',
      pc: '1440px',
    },
    borderRadius: {
      small: '8px',
      big: '24px',
    },
  },
  plugins: [forms, switcher],
};
