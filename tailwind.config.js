/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'jet-brains-mono': ['JetBrains Mono', 'sans-serif']
      },
      borderRadius: {
        inherit: 'inherit'
      }
    }
  },
  plugins: []
};
