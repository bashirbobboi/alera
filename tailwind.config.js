/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // Playfair Display (for headings/display text)
        'playfair': ['PlayfairDisplay_400Regular', 'serif'],
        'playfair-medium': ['PlayfairDisplay_500Medium', 'serif'],
        'playfair-semibold': ['PlayfairDisplay_600SemiBold', 'serif'],
        'playfair-bold': ['PlayfairDisplay_700Bold', 'serif'],
        'playfair-extrabold': ['PlayfairDisplay_800ExtraBold', 'serif'],
        'playfair-black': ['PlayfairDisplay_900Black', 'serif'],
        
        // DM Sans (for body text/UI)
        'dm-sans': ['DMSans_400Regular', 'sans-serif'],
        'dm-sans-medium': ['DMSans_500Medium', 'sans-serif'],
        'dm-sans-semibold': ['DMSans_600SemiBold', 'sans-serif'],
        'dm-sans-bold': ['DMSans_700Bold', 'sans-serif'],
        'dm-sans-extrabold': ['DMSans_800ExtraBold', 'sans-serif'],

        // Montserrat (for headings/display text)
        'montserrat': ['Montserrat_400Regular', 'sans-serif'],
        'montserrat-medium': ['Montserrat_500Medium', 'sans-serif'],
        'montserrat-semibold': ['Montserrat_600SemiBold', 'sans-serif'],
        'montserrat-bold': ['Montserrat_700Bold', 'sans-serif'],
        'montserrat-extrabold': ['Montserrat_800ExtraBold', 'sans-serif'],

        // Outfit (available for future use)
        'outfit-thin': ['Outfit_100Thin', 'sans-serif'],
        'outfit-extralight': ['Outfit_200ExtraLight', 'sans-serif'],
        'outfit-light': ['Outfit_300Light', 'sans-serif'],
        'outfit': ['Outfit_400Regular', 'sans-serif'],
        'outfit-medium': ['Outfit_500Medium', 'sans-serif'],
        'outfit-semibold': ['Outfit_600SemiBold', 'sans-serif'],
        'outfit-bold': ['Outfit_700Bold', 'sans-serif'],
        'outfit-extrabold': ['Outfit_800ExtraBold', 'sans-serif'],
        'outfit-black': ['Outfit_900Black', 'sans-serif'],
      },
      colors: {
        'primary': {
          100: '#f1efe00A',
          200: '#f1efe01A',
          300: '#f1efe0',
          400: '#f1efe04A',
        },
        'secondary': {
          DEFAULT: '#222222',
          100: '#2222221A',
          200: '#22222233',
          300: '#5E5E5E',
          400: '#22222266',
          500: '#22222280',
          600: '#22222299',
        },
        black: {
          DEFAULT: '#000000',
          100: '#262A33',
          200: '#323743',
        },
        white: {
          DEFAULT: '#ffffff',
          100: '#F3F4F6',
          200: '#BDC1CA',
        },
        purple: {
          DEFAULT: '#BAA4D8',
          100: '#BAA4D81A',
          200: '#BAA4D833',
        },
        danger: '#BAA4D8',
      },
    },
  },
  plugins: [],
}