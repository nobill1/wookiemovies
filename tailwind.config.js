module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['General Sans', 'sans-serif']
    },
    extend: {
      screens: {
        'm2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'mxl': {'max': '1440px'},
        // => @media (max-width: 1279px) { ... }
  
        'mlg': {'max': '1024px'},
        // => @media (max-width: 1023px) { ... }
  
        'mmd': {'max': '983px'},
        // => @media (max-width: 983px) { ... }

        'msm': {'max': '569px'},
        // => @media (max-width: 569px) { ... }
  
        'mxs': {'max': '425px'},
        // => @media (max-width: 425px) { ... }

        md: {'min': '983px'},
        // => @media (max-width: 983px) { ... }

        sm: {'min': '569px'},
        // => @media (min-width: 569px) { ... }  
        
        xs: {'min': '425px'},
        // => @media (min-width: 425px) { ... }
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
