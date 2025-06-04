// @ts-check
import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
    site: 'https://leonyipwh.github.io',
    integrations: [
        mdx(),
        react(),
        tailwind({
        applyBaseStyles: false,
        }),
        icon(),
        sitemap(),
        partytown({
            config: {
                ...(import.meta.env.PROD && { forward: ["dataLayer.push"] }),
            },
        }),
    ],
    markdown: {
        shikiConfig: {
            theme: 'plastic',
            wrap: true,
        },
    },
});