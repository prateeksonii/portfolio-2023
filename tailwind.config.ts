import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        head: ['Sloth', ...fontFamily.sans]
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/forms')],
} satisfies Config

