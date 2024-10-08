/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'reddit-sans': ['"Reddit Sans Condensed"', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'redditSans': ['Reddit Sans Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
