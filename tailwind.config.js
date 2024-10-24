/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open': ['Open Sans'],
        'nun':['Nunito'],
        'work':['Work Sans'],
        'play':['Playfair Display'],
        'pap':[' Paprika'],
      },
      colors: {
        'bannerColor': '#030D11',
        'nabColor': '#EFF4FA',
        'btnColor': '#D6A033',
        'HeColor': '#F7D38A',
        'HedColor': '#363024',
        'HColor': '#FBFBFA',
        'proColor': '#FDF4E1',
      },
    },
    
  },
  plugins: [],
}

