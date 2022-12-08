tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gray-100': '#101010',
        'gray-200': '#202020',
        'gray-300': '#303030',
        'gray-600': '#505050',
        'gray-700': '#959595',
        'gray-800': '#BCBCBC',
        'gray-900': '#D8D8D8',
      },
      boxShadow: {
        sm: '0 0 4px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 0 8px 0 rgb(0 0 0 / 0.05)',
        md: '0 0 12px 0 rgb(0 0 0 / 0.05)',
        lg: '0 0 16px 0 rgb(0 0 0 / 0.05)',
        xl: '0 0 24px 0 rgb(0 0 0 / 0.05)',
        '2xl': '0 0 48px 0 rgb(0 0 0 / 0.05)',
        'none': 'box-shadow: 0 0 #0000;',
      },
    }
  }
}