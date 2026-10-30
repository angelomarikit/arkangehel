import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteOrigin = env.VITE_SITE_ORIGIN?.replace(/\/$/, '') ?? '';

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'og-absolute-url',
        transformIndexHtml(html) {
          if (!siteOrigin) return html;
          return html.replace(/content="\/og-image/g, `content="${siteOrigin}/og-image`);
        },
      },
    ],
    server: {
      port: 5173,
      open: true,
      watch: {
        ignored: ['**/public/optimized/**'],
      },
    },
  };
});
