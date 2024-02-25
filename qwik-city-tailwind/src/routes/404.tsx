import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Box } from "~/components/ui";

export const head: DocumentHead = {
  title: "404 - Page not found",
  meta: [
    {
      name: "description",
      content: "Page not found",
    },
  ],
};

export default component$(() => {
  return (
    <Box class="flex items-center justify-center w-dvw h-dvh overflow-hidden">
      <Box as="h1" class="font-mono">
        404 - Page not found
      </Box>
    </Box>
  );
});
