<script setup lang="ts">
	useHead({
		title: "NuxTya",
		meta: [
			{
				name: "NuxTya | Nuxt 3 Starter Template",
				content:
					"A Nuxt 3 starter template with TypeScript, Tailwind CSS, Shadcn-vue and Pinia.",
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
