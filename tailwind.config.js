/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'teal-glow': '#00ffcc',
        'emerald-glow': '#00ff88',
        'dark-bg': '#0a0a0a',
        'glass-bg': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-teal-black': 'linear-gradient(135deg, #00ffcc 0%, #000000 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(0, 255, 204, 0.5)',
      },
    },
  },
  plugins: [],
}
