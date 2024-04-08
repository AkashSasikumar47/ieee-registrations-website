/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        head: ['Protest Guerrilla', 'sans-serif'],
        body: ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      colors: {
        white: '#ffffff',
        orange: '#F54703',
        lightOrange: '#FF7518',
        darkGray: '#2F2F2F',
        lightGray: '#464545',
        lightBlack: '#1B1B1B',
        black: '#000000',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
        '8xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}