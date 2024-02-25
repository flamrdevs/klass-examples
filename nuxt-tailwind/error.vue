<script setup lang="ts">
import { Box } from "~/components/ui";

useHead({
  title: "404 - Page not found",
  meta: [
    {
      name: "description",
      content: "Page not found",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <Box class="flex items-center justify-center w-dvw h-dvh overflow-hidden">
      <Box as="h1" class="font-mono"> 404 - Page not found </Box>
    </Box>
  </NuxtLayout>
</template>
