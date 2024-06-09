/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'default-text': '#212529',
        'custom-hover': '#d41d94',
        'primary': '#000078',
        'secondary': '#73edff',
        'lightGray': '#f8f5f5',
        'lightGray-hover': '#d5d5d5',
        'facebook-brand': '#3b5998',
        'twitter-brand': '#000',
        'instagram-brand': '#e4405f',
        'bg-contact': '#3cc',
        'grey-text': 'rgba(33,37,41,.75)',
        'link-default': '#0a58ca',
        'blue-checked': '#0d6efd'
      },
      fontFamily: {
        'default': ['Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
        'heading': ['Roboto', 'Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
        'sans': ['system-ui','-apple-system','Segoe UI','Roboto','Helvetica Neue','Noto Sans','Liberation Sans','Arial','sans-serif']
      },
      letterSpacing: {
        'extra-wide': '2px',
      },
      fontSize: {
        '2.5xl': '2.5rem',
      },
      lineHeight: {
        'tight': '1.2',
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1320px',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover'],
    },
  },
  plugins: [],
}



