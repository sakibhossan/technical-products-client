/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  daisyui: {
    themes: [
      
      {
      
        mytheme: {
        
"primary": "#0FCFEC",
        
"secondary": "#19D3AE",
        
"accent": "#3A4256",
"paith": "#FAF0E6",


        
"neutral": "#191D24",
        
"base-100": "#F3F4F6",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
