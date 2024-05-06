// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},
	modules: [
		"nuxt-security",
		"@nuxtjs/tailwindcss",
		"shadcn-nuxt",
		"@nuxtjs/color-mode",
		"@pinia/nuxt",
	],
	shadcn: {
		prefix: '',
		componentDir: './components/ui'
	},
	colorMode: {
		classSuffix: '',
		preference: 'dark'
	},
	security: {
		headers: {
			crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
		},
	},
})