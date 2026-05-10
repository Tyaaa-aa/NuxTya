<template>
  <div>
    <main class="w-screen max-w-screen-lg h-0 overflow-visible mx-auto pt-6 grid place-items-center">
      <div class="text-center">
        <h1 class="text-2xl font-extrabold tracking-tight lg:text-3xl mb-5">
          <NuxtLink to="/">NuxTya</NuxtLink>
        </h1>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
h1 {
  /* Animated glow effect */
  text-shadow: 0 0 10px rgba(66, 255, 107, 0);
  transition: text-shadow 1s ease-in-out;
}

h1:hover {
  text-shadow: 0 0 50px rgba(66, 255, 107, 0.5) !important;
  transition: text-shadow 250ms ease-in-out;
}
</style>