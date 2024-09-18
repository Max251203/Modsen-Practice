import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from  "path" ; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve : { 
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@BookCard": `${path.resolve(__dirname, "./src/components/BookCard/")}`,
      "@BookList": `${path.resolve(__dirname, "./src/components/BookList/")}`,
      "@Header": `${path.resolve(__dirname, "./src/components/Header/")}`,
      "@SearchBar": `${path.resolve(__dirname, "./src/components/SeacrhBar/")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@constants": `${path.resolve(__dirname, "./src/constants/")}`
    },
  } 
})
