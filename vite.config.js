import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isGithub = mode === 'production.github';
  return {
    base: isGithub ? '/tw-landing-page/' : '/',
    plugins: [react()],
  };
});