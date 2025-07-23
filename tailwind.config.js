/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Theme Colors
        'deep-indigo': '#0D0C1D',
        'electric-purple': '#7F5AF0',
        'mint-green': '#2CB67D',
        'off-white': '#F1F1F1',
        'muted-text': '#94A1B2',
        
        // Light Theme Colors
        'professional-blue': '#005F73',
        'coral-red': '#FF6F61',
        'ocean-cyan': '#0FA3B1',
        'bright-blue': '#0077FF',
        
        // Glass morphism
        'glass-bg': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'glass-bg-light': 'rgba(255, 255, 255, 0.9)',
        'glass-border-light': 'rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'letter-fade': 'letter-fade 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'tilt': 'tilt 0.3s ease-out',
      },
      keyframes: {
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        'glow-pulse': {
          '0%': { boxShadow: '0 0 20px rgba(127, 90, 240, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(127, 90, 240, 0.6)' },
        },
        'letter-fade': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'tilt': {
          '0%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)' },
        },
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};