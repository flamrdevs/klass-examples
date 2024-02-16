import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";

import ixstorage from "ixstorage";

import { Box, Button, IconButton } from "~/components/ui";
import { IconMoon, IconSun } from "~/components/icons";

import css from "./app.module.css";

const storage = ixstorage<boolean>("klass:dark", true);

export const App = component$(() => {
  const dark = useSignal<boolean>(() => storage.get());

  useTask$(({ track }) => {
    track(() => dark.value);
    document.documentElement.setAttribute("data-theme", dark.value ? "dark" : "light");
    storage.set(dark.value);
  });

  const toggleDark = $(() => {
    dark.value = !dark.value;
  });

  return (
    <>
      <Box as="main" p={{ base: "lg", sm: "xl" }} class="container mx-auto max-w-screen-md">
        <Box as="section" class="flex flex-col border-2 border-neutral-3 rounded-3xl overflow-hidden min-h-96 shadow">
          <Box class={[css["boxes-pattern"], "relative flex-grow overflow-hidden"]}>
            <Box class="absolute inset-0 z-10 flex flex-wrap items-center justify-center gap-4">
              <Button as="a" href="https://github.com/flamrdevs/klass" target="_blank">
                GitHub
              </Button>
              <IconButton onClick$={toggleDark}>{dark.value ? <IconSun /> : <IconMoon />}</IconButton>
            </Box>
          </Box>
          <Box class="flex-shrink-0 flex items-center border-t border-t-neutral-4 px-4 pb-2 h-16 bg-gradient-to-tr from-neutral-3 to-neutral-2 text-neutral-11 font-bold text-xl lg:text-2xl">
            klass + qwik + tailwindcss
          </Box>
        </Box>
      </Box>
    </>
  );
});
