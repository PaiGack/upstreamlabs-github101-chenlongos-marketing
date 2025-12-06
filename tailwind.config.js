/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',      // 品牌蓝
        secondary: '#3B82F6',    // 辅助蓝
        dark: '#1F2937',         // 深灰
        light: '#F9FAFB',        // 浅灰
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}