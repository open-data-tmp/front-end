/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'lg-max': { max: '1900px' },
        xl: '1300px',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        mainBlue: '#275AEC', // 메인 블루
      },
      boxShadow: {
        footer: '0 -2px 6px 1px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
