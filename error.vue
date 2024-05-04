<script setup lang="ts">
	const props = defineProps({
		error: Object,
	});
	const route = useRoute();
	const error = ref(props.error);
	const path = route.path.substring(0, route.path.length);
	const handleError = () => clearError({ redirect: "/" });
	const pageurl = ref("");
	const shareUrl = ref("");
	onMounted(() => {
		pageurl.value = window.location.origin;
		shareUrl.value = pageurl.value + "/share" + path;
	});
	const title = ref(`NuxTya | Error ${error.value?.statusCode}`);

	useSeoMeta({
		title: title.value,
		ogTitle: title.value,
		twitterTitle: title.value,
		twitterDescription:
			"A Nuxt 3 starter template with TypeScript, Tailwind CSS, Shadcn-vue and Pinia.",
		description:
			"A Nuxt 3 starter template with TypeScript, Tailwind CSS, Shadcn-vue and Pinia.",
		ogDescription:
			"A Nuxt 3 starter template with TypeScript, Tailwind CSS, Shadcn-vue and Pinia.",
		ogImage: "/favicon.svg",
		twitterImage: "/favicon.svg",
		ogUrl: "https://localhost:3000",
		twitterCard: "summary",
	});

	useHead({
		title: title.value,
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
	<main class="flex flex-col items-center justify-center min-h-screen">
		<h1 class="text-4xl font-bold text-red-500 mb-4">
			Error {{ error?.statusCode }} :(
		</h1>
		<h2 class="text-2xl mb-8">{{ error?.statusMessage }}</h2>
		<div v-if="error?.statusCode === 404" class="text-center">
			<p class="text-lg">"{{ path }}" doesn't exist</p>
		</div>
		<Button @click="handleError" class="m-5" variant="secondary">
			Back to Home
		</Button>
	</main>
</template>

<style scoped></style>
