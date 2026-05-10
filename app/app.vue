<script setup lang="ts">
useHead({
	bodyAttrs: {
		class: "nuxtya",
	},
	link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
});

useSeoMeta({
	title: "NuxTya",
	description:
		"A Nuxt 4 starter template with TypeScript, Tailwind CSS, Shadcn-vue and Pinia.",
});
</script>
<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
