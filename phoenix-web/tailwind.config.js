/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          blue: '#1d4ed8',
          navy: '#0b132b',
          slate: '#0f172a',
          orange: '#ea580c',
          amber: '#f59e0b',
          magenta: '#e11d48',
          cyan: '#06b6d4',
          yellow: '#eab308',
          light: '#f8fafc',
          border: '#e2e8f0'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'float': '0 30px 60px -12px rgba(15, 23, 42, 0.12), 0 18px 36px -18px rgba(15, 23, 42, 0.08)',
      }
    },
  },
  plugins: [],
}
