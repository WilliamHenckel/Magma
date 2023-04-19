/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Remove unused styles in production build
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'neutral-900': '#0E1014',
      'neutral-300': '#CBD5E1',
      'neutral-200': '#E2E8F0',
      'neutral-50': '#F8FAFC',
      'neutral-0': '#FFFFFF',
      'text-icon-primary': '#1C1F27',
      'text-icon-secondary': '#5F6C85',
      'text-icon-disabled': '#94A3B8',
      'red-primary': '#D92D20',
      'red-secondary': '#FEF3F2',
      'purple-primary': '#6938EF',
      'purple-secondary': '#F4F3FF',
      'green-primary': '#03874C',
      'green-secondary': '#ECFDF3',
      'blue-primary': '#444CE7',
      'blue-secondary': '#EEF4FF',
      'orange-primary': '#B25504',
      'orange-secondary': '#FFFAEB',
      'gray-primary': '#3E4784',
      'gray-secondary': '#F8F9FC'
    },
    extend: {
      boxShadow: {
        xs: '0px 1px 2px rgba(28, 31, 39, 0.05);'
      }
    }
  },
  plugins: []
}
