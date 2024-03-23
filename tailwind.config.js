/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important:'#root',
  theme: {
      fontFamily: {
        "poppins": ["Poppins","Helvetica","Arial","sans-serif"],
      },
      extend: {
        colors:{
          primary:'#EAC696',
          secondary:'#4F4A45',
        }
      },
  },
  plugins: [],
};

