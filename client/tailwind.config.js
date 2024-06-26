/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/**/*.{js,jsx,ts,tsx}", "./components/**/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
     colors: {
      primary: '#FDFDFD',
      secondary: '#1E1F1D',
      tertiary: '#F0F0F0',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        slider: "hsl(--slider)",
        shadow: "hsl(224, 9%, 25%)",
        text: "var(--text)",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
     },
     spacing:{
      xm:'4px',
      sm:'8px',
      md:'16px',
      lg:'34px',
      xxl:'34px'
     }
  },
  plugins: [],
}
}
