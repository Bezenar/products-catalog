import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/products-catalog/' : '/',
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{ts,tsx}', 'packages/**/*.{test,spec}.{ts,tsx}'],
    setupFiles: './testUtils/setup.ts',
    coverage: {
      exclude: ['**/*.module.scss', '**/assets/icons/**'],
    },
  },
  build: {
    cssMinify: 'lightningcss',
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
            },
          ],
        },
      },
    },
  },
}));
