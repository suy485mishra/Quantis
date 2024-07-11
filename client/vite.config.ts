import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//for improving imports syntax
import path from 'path'
// https://vitejs.dev/config/


export default defineConfig({
  plugins: [react()],
  //for improving import syntax
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
})
