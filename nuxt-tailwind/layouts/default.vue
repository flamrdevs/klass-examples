<script setup lang="ts">
useHead({
  title: "nuxt-tailwind",
  meta: [
    {
      name: "description",
      content: "klass example with nuxt + tailwindcss",
    },
  ],
  htmlAttrs: {
    "data-theme": "dark",
  },
});
</script>

<template>
  <slot />
</template>
