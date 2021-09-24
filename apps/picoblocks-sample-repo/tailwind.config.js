const path = require('path');

const purgePath = path.resolve(__dirname, 'src/**/');

module.exports = {
  purge: {
    content: [`${purgePath}/*.tsx`, `${purgePath}/*.ts`],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: '768px',
      lg: '1536px',
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gold: {
        DEFAULT: '#C2A675',
        hover: '#9B855E',
      },
      green: {
        1: '#205E4F',
        2: '#42806B',
      },
      gradient: {
        DEFAULT: '#F5F0ED',
        texture: '#14392D',
      },
      black: {
        DEFAULT: '#373737',
        2: '#222222',
      },
      red: '#9D2235',
      beige: '#F5F0ED',
      stroke: '#E1E1E1',
      gray: '#9B9B9B',
      white: '#FFFFFF',
      blue: '#001489',
      blackOpacity20: 'rgba(0, 0, 0, 0.2)',
    },
    fontSize: {
      xxs: ['.625rem', '0.75rem'], //10px, 12px
      xs: ['.75rem', 1.173], //12px, 14.08px
      sm: ['.875rem', 1.173], //14px, 16.42px
      base: ['1rem', 1.173], //16px, 18.77px
      lg: ['1.25rem', 1.173], //20px, 23.46px
      xl: ['1.5625rem', 1.173], //25px, 29.33px
      '2xl': ['1.875rem', 1.173], //30px, 35.19px
      '3xl': ['2.5rem', 1.173], //40px, 46.92px
      '4xl': ['3.125rem', 1.173], //50px, 58.65px
      '5xl': ['3.75rem', '4rem'], //60px, 64px
    },
    gridTemplateAreas: {
      'menu-lg': ['first second third'],
      'menu-md': ['first second', 'third second'],
      'menu-sm': ['first', 'second', 'third'],
    },

    extend: {
      gridTemplateColumns: {
        'product-cart': '5rem 1fr 1.5rem',
        'product-payment-lg': '5rem 1fr',
        'product-payment': '5rem 4fr 1fr',
        'product-payment-text': '2.5fr 1fr 1.5fr',
      },
      lineHeight: {
        auto: 1.173,
        3.5: '0.875rem',
      },
      borderWidth: {
        2.5: '0.625rem',
      },
      spacing: {
        1.25: '0.3125rem', //5px
        3.75: '0.9375rem', //15px
        4.5: '1.125rem', //18px
        4.75: '1.1875rem', //19px
        6.25: '1.5625rem', //25px
        7.5: '1.875rem', //30px
        8.75: '2.1875rem', //35px
        12.25: '3.0625rem', //49px
        12.5: '3.125rem', //50px
        15: '3.75rem', //60px
        16.25: '4.0625rem', //65px
        17.5: '4.375rem', //70px
        20.25: '5.0625rem', //81px
        22.5: '5.625rem', //90px
        25: '6.25rem', //100px
        27.5: '6.875rem', //110px
        30: '7.5rem', //120px
        41.75: '10.4375rem', //167px
        50: '12.5rem', //200px
        51.25: '12.8125rem', //205px
        58: '14.5rem', //232px
        66: '16.5rem', //264px
        70: '17.5rem', //280px
        97: '24.375rem', //390px
        111: '27.75rem', //444px
        129: '32.25rem', //516px
        150: '37.5rem', //600px
      },
      maxWidth: {
        83.75: '20.9375rem', //335px
        111: '27.75rem', //444px
        129: '32.25rem', //516px
        150: '37.5rem', //600px
      },
      backgroundSize: {
        7: '1.75rem', //28px
        14: '3.5rem', //56px
      },
      backgroundPosition: {
        'kv-lg': 'center -1.25rem',
        'kv-md': 'center -19rem',
        'kv-sm': 'center -34.75rem',
      },
      opacity: {
        15: '0.15',
      },
      translate: {
        'tooltip-bottom': 'calc(-100% + 2.1875rem)',
      },
      zIndex: {
        '-1': '-1',
      },
      height: {
        content: 'fit-content',
      },
      gap: {
        '1/10': '10%',
        '1/3': '33%',
      },
      fill: (theme) => ({
        stroke: theme('colors.stroke'),
        gold: theme('colors.gold'),
      }),
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
