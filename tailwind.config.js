/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'extra-heavy': '0px 10px 50px rgba(0, 0, 0, 0.5)', // Shadow besar dan gelap
        'soft-shadow': '0px 10px 20px rgba(0, 0, 0, 0.25)', // Shadow seperti gambar
        'thick-shadow': '0px 15px 30px rgba(0, 0, 0, 0.5)', // Shadow tebal
      },
      margin: {
        '128': '40rem', // setara dengan ml-128
      },
      borderRadius: {
        'custom-150': '150px', // Misalnya radius 150px
      },
      colors: {
        customBlu: '#A3D0EE',
        fontblue: '#17466E',
        click: '#17466E',
        bgdropdown: '#E5F1F9',
        iconig: '#246AA4',
        border: '#609AC1',
        button: '#227AA7',
        article: '#2E85C8',
        customBlue: '#246AA4',
        fontblue: '#DCE8F3',
        click: '#17466E',
        bluebox: '#A3D0EE',
        purewhite: '#FFFFFF',
        bluebtn: '#246AA4',
        conscars1: '#F2F9FD',
        conscars2: '#C5E3F2',
        bluepakar:'#DCE8F3',
        blackhuruf: '#1B1919',
        putih:'#D6E1EE',
        birulembut:'#E5F1F9', // Move customBlue here
      },
    },
  },
  plugins: [],
}
