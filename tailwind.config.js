/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        clashDisplay: ['Clash Display', 'sans-serif'],
      },
      screens: {
        handphone: '375px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1920px',
      },
      colors: {
        myWhite: '#F8F8F8',
        myBlack: '#000000',
        myDarkGreen: '#005100',
        myGreen1: '#8BC34A',
        myGreen2: '#2A9235',
        myGreen3: '#4CAF50',
      },
    },
  },
  plugins: [],
};
