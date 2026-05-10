<script setup lang="ts">
	useHead({
		title: "NuxTya",
		meta: [
			{
				name: "NuxTya | Nuxt 4 Starter Template",
				content:
					"A Nuxt 4 starter template with TypeScript, Tailwind CSS, Shadcn-vue and Pinia.",
			},
		],
		bodyAttrs: {
			class: "nuxt-tya",
		},
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
	});
</script>
<template>
	<div>
		<NuxtPage />
	</div>
</template>
