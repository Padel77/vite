
import { defineConfig , splitVendorChunkPlugin} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),splitVendorChunkPlugin(),
    // require('rollup-plugin-replace')({
    //     'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    // require('rollup-plugin-commonjs')(),
    // require('rollup-plugin-terser')(),
  ],
  build: {
    // sourcemap: true,
    minify: true,
    target: 'es2022',
  },
})
