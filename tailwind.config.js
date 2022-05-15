module.exports = {
  purge:{
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ]
  },
  theme: {
    extend: {
      colors:{
        "dark-mode-header":"#2A2E35",
        "white-mode-header":"#FFFFFF",
        "dark-mode-body":"#12181B",
        "white-mode-body":"#DBE1E8",
        "dark-mode-heading-text":"#B2BECD",
        "dark-mode-text":"white",
        "white-mode-heading-text":"#12181B",
        "white-mode-text":"#4E5256"
      },
      fontFamily:{
        body:['Sora']
      }
    },
  },
  plugins: [],
}
