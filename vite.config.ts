
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Ensure the API key is stringified correctly for injection into the bundle
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
  },
});
