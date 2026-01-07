/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Royal Luxury Palette
        royal: {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9c27b0',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
        },
        gold: {
          50: '#fdfaf3',
          100: '#faf4e1',
          200: '#f5e8c3',
          300: '#efdca5',
          400: '#e9d087',
          500: '#d4af37',
          600: '#c19b2f',
          700: '#a88627',
          800: '#8f711f',
          900: '#765c17',
        },
        rosegold: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9cfd6',
          300: '#f5a8b8',
          400: '#ef7a92',
          500: '#b76e79',
          600: '#a35d6a',
          700: '#8f4d5b',
          800: '#7b3d4c',
          900: '#672d3d',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfbf7',
          200: '#fbf8ef',
          300: '#f9f5e7',
          400: '#f7f2df',
          500: '#f5f5dc',
          600: '#e8e8c9',
          700: '#dbdbb6',
          800: '#cecea3',
          900: '#c1c190',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-royal': 'linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #c19b2f 100%)',
        'gradient-luxury': 'linear-gradient(135deg, #4a148c 0%, #7b1fa2 50%, #d4af37 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(74, 20, 140, 0.2)',
        'luxury-lg': '0 20px 60px rgba(74, 20, 140, 0.3)',
        'gold': '0 10px 40px rgba(212, 175, 55, 0.2)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}