import { Meta, Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

import { Box, Button } from "~/components/ui";

export default function Baz() {
  return (
    <>
      <>
        <Title>baz</Title>
        <Meta name="description" content="baz" />
      </>

      <Box class="flex items-center justify-center w-dvw h-dvh overflow-hidden">
        <Box class="flex flex-col bg-neutral-1 border border-neutral-3 rounded-3xl">
          <Box p="md" class="flex items-center justify-between gap-2">
            <Button as={A} href="/" size="sm">
              home
            </Button>
            <Box as="h1" mr="sm" class="font-mono text-xl">
              baz
            </Box>
          </Box>
          <Box class="w-60 h-px bg-neutral-3" />
          <Box p="md" class="flex items-center justify-center gap-2">
            <Button as={A} href="/foo" size="sm">
              foo
            </Button>
            <Button as={A} href="/bar" size="sm">
              bar
            </Button>
            <Button as={A} href="/baz" color="primary" size="sm">
              baz
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}