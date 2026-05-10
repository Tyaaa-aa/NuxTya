<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
	error: NuxtError;
}>();

const handleError = () => clearError({ redirect: "/" });

const title = computed(() => `NuxTya | Error ${props.error?.statusCode}`);
const description =
	"A Nuxt 4 starter template with TypeScript, Tailwind CSS, Shadcn-vue and Pinia.";

useSeoMeta({
	title,
	ogTitle: title,
	twitterTitle: title,
	description,
	ogDescription: description,
	twitterDescription: description,
	ogImage: "/favicon.svg",
	twitterImage: "/favicon.svg",
	twitterCard: "summary",
});

useHead({
	bodyAttrs: {
		class: "nuxt-tya",
	},
	link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
});
</script>

<template>
	<NuxtLayout>
		<main class="flex flex-col items-center justify-center min-h-screen">
			<h1 class="text-4xl font-bold text-red-500 mb-4">
				Error {{ error?.status }} :(
			</h1>
			<h2 class="text-2xl mb-8">{{ error?.message }}</h2>
			<div v-if="error?.status === 404 && error?.statusText" class="text-center">
				<p class="text-lg">"{{ error.statusText }}" doesn't exist</p>
			</div>
			<div v-else class="text-center">
				<p class="text-lg">{{ error.statusText }}</p>
			</div>
			<Button @click="handleError" class="m-5 underline" variant="secondary">
				Back to Home
			</Button>
		</main>
	</NuxtLayout>
</template>
