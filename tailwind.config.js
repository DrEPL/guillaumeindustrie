/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      'screens': {
        'xs': {'max ': '640px', "min": "340px"},
      },
      "colors": {
        'beige': '#FFF5E1',
        'marron': '#8B4513',
        'ocre': '#D2B48C'
      },
      "backgroundColor": {
        'bg-beige': '#FFF5E1',
        'bg-marron': '#8B4513',
        'bg-ocre': '#D2B48C'
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')],
}

