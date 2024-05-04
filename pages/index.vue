<script setup lang="ts">
	import { useCounterStore } from "@/stores/counter"; // You can make stores in the stores folder
	const store = useCounterStore(); // Use the store
	const colorMode = useColorMode(); // Use color mode provided by nuxt-color-mode
	const toggleColorMode = () => (colorMode.preference = colorMode.preference === "dark" ? "light" : "dark");
	const title = ref<NuxtTya>({ msg: "NuxTya" }); // Global interface and types can be found in the types folder
	const { data: serverMsg, error, pending } = await useFetch("/api/hello"); // Fetch data from the server
	onMounted(() => {
		if (error.value) {
			title.value = { msg: "Error" };
		}
	});
</script>
<!-- This is a boilerplate to show all the features this starter template has to offer -->
<!-- NuxTya is a minimal Nuxt 3 starter template that gets you started with the basics and sensible defaults -->
<!-- It includes TypeScript, Tailwind CSS, Shadcn-vue, Pinia, and more -->
<!-- NuxTya  -->
<!-- You can remove this and start building your app -->
<template>
	<main class="w-screen h-screen grid place-items-center">
		<div class="text-center">
			<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl mb-5">
				{{ title.msg }}
			</h1>
			<h2 v-if="pending">Loading...</h2>
			<h2 v-else class="text-3xl m-5 font-bold">{{ serverMsg }}</h2>
			<h2 class="text-2xl m-5 font-bold">Shadcn-vue & Tailwind CSS</h2>
			<div class="text-center">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<Button as-child class="m-1" variant="link" aria-label="Visit Shadcn-vue documentation">
								<a href="https://www.shadcn-vue.com/docs/introduction.html" target="_blank">
									Shadcn-vue
								</a>
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>I'm a tooltip!</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<Button class="m-1 capitalize" @click="toggleColorMode" aria-label="Toggle Dark Mode">
					Toggle {{ colorMode.preference === "dark" ? "light" : "dark" }} Mode
				</Button>
			</div>
			<h2 class="text-2xl m-5 font-bold">Pinia</h2>
			<div class="text-center">
				<Button class="m-1" variant="secondary" @click="store.increment" aria-label="Increment Count">Increment</Button>
				<Button class="m-1" variant="outline" @click="store.decrement" aria-label="Decrement Count">Decrement</Button>
				<div class="flex flex-col">
					<span class="text-2xl">Count: {{ store.count }}</span>
					<span class="text-2xl">Double:{{ store.doubleCount }}</span>
				</div>
			</div>
		</div>
	</main>
</template>
