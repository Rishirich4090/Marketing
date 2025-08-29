/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#5B65F0',
        'primary-dark': '#2532EB',
        'slate-800': '#1E293B',
        'slate-600': '#475569',
        'slate-500': '#64748B',
        'slate-300': '#CBD5E1',
        'slate-100': '#F1F5F9',
        'gray-400': '#9CA3AF',
      },
      backgroundImage: {
        'hero-pattern': "url('https://api.builder.io/api/v1/image/assets/TEMP/e9863836725add03a41431b13f2a808403220cac?width=2880')",
        'footer-pattern': "url('https://api.builder.io/api/v1/image/assets/TEMP/4b8799fda9212335dd881ef11fd8992869e42cc2?width=2880')",
      },
      boxShadow: {
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)',
        'testimonial': '13px 11px 10px 0 rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
