/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'display': ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading': ['22px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        'caption': ['13px', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '500' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
      },
      colors: {
        'primary': '#1a1a1a',
        'secondary': '#666666',
        'tertiary': '#999999',
        'accent': '#000000',
        'accent-hover': '#1a1a1a',
        'accent-pressed': '#333333',
        'surface': '#ffffff',
        'surface-secondary': '#fafafa',
        'surface-tertiary': '#f5f5f5',
        'border': '#e0e0e0',
        'border-light': '#f0f0f0',
      },
      borderRadius: {
        'card': '16px',
        'button': '14px',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

