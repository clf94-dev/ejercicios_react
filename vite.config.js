import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteCommonjs(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: [],
    }),],
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          // Solves:
          // https://github.com/vitejs/vite/issues/5308
          esbuildCommonjs(['react-flagpack'])
        ],
      },
    },
})
