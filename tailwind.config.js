module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        back: "#001542",
        fore: "#44C3E3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
