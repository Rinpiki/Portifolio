/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        zero: '1px',
        tablet: '620px',
        mb: '390px',
        mbx: '480px',
        mdx: '800px',
        lgg: '1024px',
        xll: '1200px',
      },
    },
  },
  plugins: [],
};
