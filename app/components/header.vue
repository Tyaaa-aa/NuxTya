<template>
  <div>
    <header class="max-w-screen-lg mx-auto text-center mt-10">
      <h1 class="text-2xl font-extrabold lg:text-3xl m-0">
        <NuxtLink to="/">NuxTya</NuxtLink>
      </h1>
    </header>
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