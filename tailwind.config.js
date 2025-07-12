/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkblue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        cosmic: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6ff',
          300: '#a5b8ff',
          400: '#8b93ff',
          500: '#7c6dff',
          600: '#6d4eff',
          700: '#5d3bff',
          800: '#4c2bff',
          900: '#3b1aff',
        },
        nebula: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cosmic-gradient': 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 25%, #2a1a4a 50%, #1a1a3a 75%, #0a0a1a 100%)',
        'nebula-gradient': 'radial-gradient(ellipse at center, rgba(138, 43, 226, 0.3) 0%, rgba(75, 0, 130, 0.2) 50%, transparent 100%)',
        'star-field': 'radial-gradient(2px 2px at 20px 30px, #eee, transparent), radial-gradient(2px 2px at 40px 70px, #fff, transparent), radial-gradient(1px 1px at 90px 40px, #fff, transparent), radial-gradient(1px 1px at 130px 80px, #fff, transparent), radial-gradient(2px 2px at 160px 30px, #ddd, transparent)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'cosmic-drift': 'cosmic-drift 30s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'cosmic-drift': {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(20px) translateY(-10px)' },
          '50%': { transform: 'translateX(-10px) translateY(-20px)' },
          '75%': { transform: 'translateX(-20px) translateY(10px)' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 5px theme(colors.blue.500), 0 0 20px theme(colors.blue.500), 0 0 35px theme(colors.blue.500)',
        'neon-purple': '0 0 5px theme(colors.purple.500), 0 0 20px theme(colors.purple.500), 0 0 35px theme(colors.purple.500)',
        'neon-cyan': '0 0 5px theme(colors.cyan.500), 0 0 20px theme(colors.cyan.500), 0 0 35px theme(colors.cyan.500)',
        'cosmic': '0 0 30px rgba(138, 43, 226, 0.5), 0 0 60px rgba(75, 0, 130, 0.3)',
        'stellar': '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
        'modern': '0 10px 25px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1)',
        'modern-lg': '0 20px 40px rgba(0, 0, 0, 0.3), 0 8px 20px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'modern': '20px',
        'modern-lg': '30px',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        'cosmic': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};