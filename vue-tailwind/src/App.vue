<script setup lang="tsx">
import { ref, watchEffect } from "vue";

import ixstorage from "ixstorage";

import { Box, Button, IconButton } from "~/components/ui";
import { IconMoon, IconSun } from "~/components/icons";

const storage = ixstorage<boolean>("klass:dark", true);

const dark = ref<boolean>(storage.get());

watchEffect(() => {
  const value = dark.value;
  document.documentElement.setAttribute("data-theme", value ? "dark" : "light");
  storage.set(value);
});

const toggleDark = () => {
  dark.value = !dark.value;
};
</script>

<template>
  <Box as="main" :p="{ base: 'lg', sm: 'xl' }" class="container mx-auto max-w-screen-md">
    <Box as="section" class="flex flex-col border-2 border-neutral-3 rounded-3xl overflow-hidden min-h-96 shadow">
      <Box class="boxes-pattern relative flex-grow overflow-hidden">
        <Box class="absolute inset-0 z-10 flex flex-wrap items-center justify-center gap-4">
          <Button as="a" href="https://github.com/flamrdevs/klass" target="_blank"> GitHub </Button>
          <IconButton @click="toggleDark">
            <IconSun v-if="dark" />
            <IconMoon v-else />
          </IconButton>
        </Box>
      </Box>
      <Box
        class="flex-shrink-0 flex items-center border-t border-t-neutral-4 px-4 pb-2 h-16 bg-gradient-to-tr from-neutral-3 to-neutral-2 text-neutral-11 font-bold text-xl lg:text-2xl"
      >
        klass + vue + tailwindcss
      </Box>
    </Box>
  </Box>
</template>

<style scoped>
.boxes-pattern {
  background-color: rgb(var(--neutral-1));
  background-image: linear-gradient(rgb(var(--neutral-3)) 1px, transparent 1px),
    linear-gradient(to right, rgb(var(--neutral-3)) 1px, rgb(var(--neutral-1)) 1px);
  background-size: 20px 20px;
  background-position: center;
}

.boxes-pattern::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: radial-gradient(transparent 20%, rgb(var(--neutral-1)));
}
</style>
