import cloudflare from '@astrojs/cloudflare';
import Atomico from '@atomico/astro';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  experimental: {
    responsiveImages: true,
    svg: true,
  },
  integrations: [
    Atomico({
      cssLiterals: { minify: true, postcss: true },
      customElements: {
        define: ['islands/**/*'],
      },
    }),
  ],
  output: 'static',
  vite: {
    css: {
      lightningcss: {
        drafts: {
          customMedia: true,
        },
        errorRecovery: true,
        nonStandard: {
          deepSelectorCombinator: true,
        },
      },
      transformer: 'lightningcss',
    },
    resolve: {
      alias: [
        {
          find: /^(components|islands|layouts):/,
          replacement: import.meta.resolve('./src/$1/').replace('file://', ''),
        },
      ],
    },
  },
});
