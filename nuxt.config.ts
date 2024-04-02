// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Plurk – Tailwind CSS Multipurpose Landing Templates',
            titleTemplate: '%s | Plurk – Tailwind CSS Multipurpose Landing Templates',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
                },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700;800&display=swap',
                },
            ],
        },
    },

    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@pinia/nuxt'],
});
