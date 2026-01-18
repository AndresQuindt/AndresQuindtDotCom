import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
    integrations: [tailwind()],
    build: {
        inlineStylesheets: 'auto'
    },
    compressHTML: true,
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
