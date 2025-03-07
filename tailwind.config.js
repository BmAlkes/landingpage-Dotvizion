export default{
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#13151a',
          secondary: '#1a1d25',
        },
        brand: {
          blue: {
            light: '#4facfe',
            DEFAULT: '#00f2fe',
          },
          orange: {
            light: '#f7b733',
            DEFAULT: '#f5a623',
          },
        },
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
     
    },
  },
  plugins: [],
}