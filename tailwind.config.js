/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins", "sans-serif"],
        dm_sans:["DM Sans", "sans-serif"]
      },
      container:{
        center:true,
        padding:"2rem",
        screens:{
          DEFAULT:"100%",
          sm:"640px",
          md:"768px",
          lg:"1024px",
          xl:"1208px"
        }
      }
    },
  },
  plugins: [],
}