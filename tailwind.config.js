const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [],
  theme: {
    extend: {
        padding: {
            '5/6': '83.333333%',
            },
        spacing: {
            '72': '18rem',
            '80': '20rem',
            '88': '22rem',
            '96': '24rem',
            },
        colors: {
            "uvBlack": "#02020B",
            "uvWhite": "#FFFAFF",
            "uvBlue": "#30BCED",
            "uvPink": "#D72483",
            "uvPinkHover": "#c8227a",
            "uvGreen": "#23CE6B",
            "macGreen": "#52C22C",
            "macYellow": "#FFBE2D",
            "macRed": "#FF6058",
            },
        opacity: {
            '0': '0',
            '20': '0.2',
            '40': '0.4',
            '60': '0.6',
            '80': '0.8',
            '85': '0.85',
            '90': '0.9',
            '100': '1',
            }
    },
    fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '7rem',
            '10xl': '8rem',
        },
        customForms: theme => ({
            borderRadius: theme('borderRadius.lg'),
            backgroundColor: theme('colors.gray.700'),
        })
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms'),
    ],
}
