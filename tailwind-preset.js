// const { red } = require('tailwindcss/colors');
// const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

// const webkitSearchInputCancelIconTarget =
//   'input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-results-button, input[type="search"]::-webkit-search-results-decoration';

// const ieSearchInputCancelIconTarget =
//   'input.hide-clear[type=search]::-ms-clear, input.hide-clear[type=search]::-ms-reveal';

module.exports = {
  theme: {
    // screens: {
    //   xxs: '400px',
    //   xs: '475px',
    //   ...defaultTheme.screens,
    //   '2xl': '1440px',
    //   '3xl': '1600px',
    // },
    // fontFamily: {
    // sans: ['Inter', ...defaultTheme.fontFamily.sans],
    // sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
    // },
    extend: {
      colors: {
        current: 'currentColor',
        primary: {
          light: '#85d7ff',
          DEFAULT: 'var(--color-primary)',
          darkBlue: 'var(--color-primary)',
          dark: '#009eeb',
        },
        rheum: {
          darkBlue: 'var(--color-primary)',
          darkBlueHover: '#2f5c9a',
        },
        brand: {
          blueUltraSoft: '#f7fafc',
          blueSoft: '#e4eef5',
          blueUltraLight: '#EDF6FC',
          blueLight: '#95C6EF',
          blueDark: '#10426A',
          blueUltraDark: '#082236',
        },
      },
      // typography: ({ theme }) => ({
      //   DEFAULT: {
      //     css: {
      // '.accordion-body > p:first-child': {
      //   marginTop: '0.5em',
      // },
      // 'h4 + .accordion, h5 + .accordion, h6 + .accordion': {
      //   marginTop: '1em',
      // },
      // 'b, strong': {
      //   color: theme('colors.brand.blueDark'),
      //   fontWeight: theme('fontWeight.semibold'),
      //   letterSpacing: theme('letterSpacing.tight'),
      // },
      // em: { color: 'inherit' },
      // 'a strong': {
      //   color: 'inherit',
      //   fontWeight: 'inherit',
      // },
      // 'a em': {
      //   color: 'inherit',
      //   fontWeight: 'inherit',
      // },
      // ol: {
      //   li: {
      //     '&:before': { color: theme('colors.brand.blue.dark') },
      //     p: {
      //       // override the mdx-react stack where the AST puts text in a p inside li
      //       marginTop: 0,
      //       marginBottom: 0,
      //     },
      //   },
      // },
      // ul: {
      //   li: {
      //     '&:before': { backgroundColor: theme('colors.brand.blue.dark') },
      //     p: {
      //       // override the mdx-react stack where the AST puts text in a p inside li
      //       marginTop: 0,
      //       marginBottom: 0,
      //     },
      //   },
      // },
      // 'h1, h2': {
      //   letterSpacing: '-0.025em',
      // },
      //   },
      // },
      // lg: {
      //   css: {
      //     '.accordion-heading': {
      //       '@apply leading-none mt-0 mb-0 text-lg': {},
      //     },
      //     '.accordion-body': {
      //       '& > p:first-child, & > h2:first-child, & > h3:first-child, & > h4:first-child, & > h5:first-child, & > h6:first-child':
      //         {
      //           color: 'inherit',
      //           marginTop: '0.75em',
      //         },
      //     },
      //     'h4 + .accordion, h5 + .accordion, h6 + .accordion': {
      //       marginTop: '1em',
      //     },
      //   },
      // },
      // }),
      flexGrow: {
        2: '2',
        3: '3',
      },
      fontSize: {
        xxs: '.625rem',
      },
      borderWidth: {
        3: '3px',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      opacity: {
        5: '0.05',
        7: '0.07',
        10: '0.1',
        12: '0.12',
        15: '0.15',
        85: '0.85',
      },
    },
  },
  plugins: [
    // popular tailwind plugins
    // require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    // custom inline plugin implementation with css variables ({ addBase, theme })
    // plugin(function ({ addBase, addComponents, theme }) {
    // addBase({
    //   // definition of css variables for colors
    //   ':root': {
    //     '--color-primary': '#315182',
    //     // '--color-secondary': '#00ff00',
    //     '--color-background': '#ecf3f8',
    //     '--color-copy': 'rgba(0, 0, 0, 0.9)',
    //   },
    //   // always show scrollbar (on Windows this avoids horizontal jank during loading or transitions)
    //   body: {
    //     overflowY: 'scroll',
    //   },
    //   // remove spinner displayed on input type="number" on chrome/safari/edge/opera
    //   'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    //     '-webkit-appearance': 'none',
    //     margin: '0',
    //   },
    //   // remove spinner displayed on input type="number" on firefox
    //   'input[type="number"]': {
    //     '-moz-appearance': 'textfield',
    //   },
    //   // remove 'x' search cancel button on input type="search" on webkit-based browsers
    //   [webkitSearchInputCancelIconTarget]: {
    //     '-webkit-appearance': 'none',
    //   },
    // remove 'x' search cancel button on input type="search" on IE
    // [ieSearchInputCancelIconTarget]: {
    //   display: 'none',
    //   width: 0,
    //   height: 0,
    // },
    // rheuminfo's legacy wp applied tighter letter spacing on headings (for tailwind: theme('letterSpacing.tighter'))
    // 'h1, h2, h3, h4, h5, h6': {
    //   color: theme('colors.brand.blue.dark'),
    // },
    // 'h1, h2, h3': {
    //   letterSpacing: '-0.04em',
    // },
    // 'h4, h5, h6': {
    //   letterSpacing: '-0.025em',
    // },
    // 'spinner-border': {
    //   'vertical-align': '-0.125em',
    //   border: '0.25em solid red',
    //   'border-right-color': 'transparent',
    // },
    // a: {
    //   transitionProperty: theme('transitionProperty.colors'),
    //   transitionDuration: theme('transitionDuration.150'),
    //   transitionTimingFunction: 'ease-in',
    // },
    // button: {
    //   transitionProperty: theme('transitionProperty.colors'),
    //   transitionDuration: theme('transitionDuration.150'),
    //   transitionTimingFunction: 'ease-in',
    // },
    // });
    // addComponents({
    // '.rheum-box': {
    //   border: theme('borderWidth.2'),
    //   borderRadius: theme('borderRadius.md'),
    // '&:hover': {
    //   borderColor: theme('colors.primary'),
    //   cursor: theme('cursor.pointer'),
    // },
    // '&:focus': {
    //   '--tw-ring-color': 'currentColor',
    // },
    // -2 rounded-full
    // backgroundColor: theme('colors.white'),
    // borderRadius: theme('borderRadius.lg'),
    // padding: theme('spacing.6'),
    // boxShadow: theme('boxShadow.xl'),
    //   },
    // });
    // }),
    plugin(function ({ addUtilities }) {
      const utilities = {
        '.inset-center': {
          top: '50%',
          left: '50%',
          '@apply -translate-x-1/2 -translate-y-1/2': {},
        },
        '.inset-y-center': {
          top: '50%',
          '@apply -translate-y-1/2': {},
        },
        '.inset-x-center': {
          left: '50%',
          '@apply -translate-x-1/2': {},
        },
      };

      addUtilities(utilities, ['responsive', 'hover']);
    }),
    // plugin(function ({ addUtilities }) {
    //   const newUtilities = {
    //     '.-animate-delay-1': {
    //       'animation-delay': '-0.32s',
    //     },
    //     '.-animate-delay-2': {
    //       'animation-delay': '-0.16s',
    //     },
    //   }
    //   addUtilities(newUtilities)
    // }),
  ],
};
