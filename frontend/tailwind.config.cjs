/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
    extend: {
      // Semantic color tokens using Tailwind's palette
      colors: {
        primary: colors.indigo,
        secondary: colors.teal,
        neutral: colors.slate,
        success: colors.green,
        danger: colors.rose,
        warning: colors.amber,
        // Optional brand accent for fine-grained tweaks
        'brand-accent': '#0ea5e9',
      },

      // Typography
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
      },

      // Corners & shadows used across the app
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },

      boxShadow: {
        card: '0 8px 24px rgba(15, 23, 42, 0.08)',
        'focus-ring': '0 0 0 4px rgba(59, 130, 246, 0.08)',
      },

      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
