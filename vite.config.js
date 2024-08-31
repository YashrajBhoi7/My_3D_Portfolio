import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.mp3', '**/*.ico'], // Ensure these file types are properly included as assets
  build: {
    rollupOptions: {
      // Customize Rollup options if needed
      output: {
        // Ensure proper configuration for file types and paths
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});



