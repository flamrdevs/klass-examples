import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Box, Button } from "~/components/ui";

export const head: DocumentHead = {
  title: "foo",
  meta: [
    {
      name: "description",
      content: "foo",
    },
  ],
};

export default component$(() => {
  return (
    <Box class="flex items-center justify-center w-dvw h-dvh overflow-hidden">
      <Box class="flex flex-col bg-neutral-1 border border-neutral-3 rounded-3xl">
        <Box p="md" class="flex items-center justify-between gap-2">
          <Button as={Link} href="/" size="sm">
            home
          </Button>
          <Box as="h1" mr="sm" class="font-mono text-xl">
            foo
          </Box>
        </Box>
        <Box class="w-60 h-px bg-neutral-3" />
        <Box p="md" class="flex items-center justify-center gap-2">
          <Button as={Link} href="/foo" color="primary" size="sm">
            foo
          </Button>
          <Button as={Link} href="/bar" size="sm">
            bar
          </Button>
          <Button as={Link} href="/baz" size="sm">
            baz
          </Button>
        </Box>
      </Box>
    </Box>
  );
});
