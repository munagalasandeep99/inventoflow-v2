import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, path.resolve(), '');
    return {
      plugins: [react()],
      define: {
        'process.env.API_KEY': AIzaSyCIhBSAinrslphItiVw1dv2nnyYrDwEcaw,
        'process.env.GEMINI_API_KEY': AIzaSyCIhBSAinrslphItiVw1dv2nnyYrDwEcaw
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './'),
        }
      }
    };
});