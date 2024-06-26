// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Botcom – Agenzia di comunicazione digitale e sviluppo software a Milano',
            titleTemplate: '%s | Botcom Agenzia di comunicazione digitale e sviluppo software a Milano',
            htmlAttrs: {
                lang: 'it',
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
                    href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700;800&display=swap',
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
