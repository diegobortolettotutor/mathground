// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


export default defineConfig({
    site: 'https://mathground.it',
    redirects: {
        '/': '/it/',
    },
    integrations: [
        starlight({
            logo: {
                light: './src/assets/Logo-light.svg',
                dark: './src/assets/Logo-dark.svg',
                replacesTitle: true,
            },
            title: 'MathGround',
            customCss: ['./src/katex.css'],
            defaultLocale: 'it',
            locales: {
                it: { label: 'Italiano', lang: 'it' },
                en: { label: 'English', lang: 'en' },
            },
            components: {
                PageFrame: './src/components/SidebarScript.astro',
                Footer: './src/components/Footer.astro',
                Head: './src/components/Head.astro',
            },
            sidebar: [
                {
                    label: 'Algebra Lineare e Geometria',
                    translations: { en: 'Linear Algebra and Geometry' },
                    slug: 'algebra-lineare/intro',
                },
                {
                    label: 'Analisi Matematica 1',
                    translations: { en: 'Calculus 1' },
                    slug: 'analisi1/intro',
                },
                {
                    label: 'Analisi Matematica 2',
                    translations: { en: 'Calculus 2' },
                    slug: 'analisi2/intro',
                },
                {
                    label: 'Fisica Generale 1',
                    translations: { en: 'Physics 1' },
                    slug: 'fisica1/intro',
                },
                {
                    label: 'Fisica Generale 2',
                    translations: { en: 'Physics 2' },
                    slug: 'fisica2/intro',
                },
                {
                    label: 'Elettrotecnica Generale',
                    translations: { en: 'Fundamentals of Electrical Engineering' },
                    slug: 'elettrotecnica/intro',
                },
                {
                    label: 'Elettronica Generale',
                    translations: { en: 'Fundamentals of Electronics' },
                    slug: 'elettronica/intro',
                },
                {
                    label: 'Programmazione',
                    translations: { en: 'Programming Notes' },
                    slug: 'informatica/intro',
                },
                {
                    label: 'Laboratorio Robotica',
                    translations: { en: 'Robotics Lab Notes' },
                    slug: 'lab/intro',
                },
                {
                    label: 'Risolutori Interattivi',
                    translations: { en: 'Math Solvers' },
                    collapsed: true,
                    items: [{ autogenerate: { directory: 'risolutori' } }],
                },
                {
                    label: 'Simulatori',
                    translations: { en: 'Simulators' },
                    collapsed: true,
                    items: [{ autogenerate: { directory: 'simulatori' } }],
                },
                {
                    label: 'Contattami',
                    translations: { en: 'Contact me' },
                    slug: 'contatti',
                },
            ],
        }),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});