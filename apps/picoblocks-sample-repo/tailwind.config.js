const path = require('path');

const purgePath = path.resolve(__dirname, 'src/**/');

module.exports = {
  purge: {
    content: [`${purgePath}/*.tsx`, `${purgePath}/*.ts`],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    fontFamily: {
      inter: 'Inter',
      sans: ['Work Sans', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      gray: {
        500: '#6b7280',
        900: '#111827',
      },
      indigo: {
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
      },
    },
    fontSize: {
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.875rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
      '5xl': '3.75rem',
    },
    boxShadow: {
      base: '0px 1px 2px 0px rgba(0,0,0,0.06), 0px 1px 3px 0px rgba(0,0,0,0.1)',
    },
    borderRadius: {
      none: '0',
      xs: '0.3125rem',
      sm: '0.375rem',
    },
    extend: {
      lineHeight: {
        12: '3rem',
        15: '3.75rem',
      },
      spacing: {
        180: '45rem',
        320: '80rem',
      },
    },
  },
  variants: {
    gridTemplateAreas: ['responsive'],
    extend: {
      border: ['focus', 'focus-visible', 'focus-within', 'group-focus'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      padding: ['first', 'last'],
      margin: ['first', 'last'],
      display: ['first'],
    },
  },
};
