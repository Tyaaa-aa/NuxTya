// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxtjs/color-mode", "@pinia/nuxt"],
	shadcn: {
		prefix: '',
		componentDir: './components/ui'
	},
	colorMode: {
		classSuffix: '',
		preference: 'dark'
	},
})