import { Head } from "$fresh/runtime.ts";

import { Box, Button } from "./../components/ui/index.ts";

export default function Foo() {
  return (
    <>
      <Head>
        <title>foo</title>
        <meta name="description" content="foo" />
      </Head>

      <Box class="flex items-center justify-center w-dvw h-dvh overflow-hidden">
        <Box class="flex flex-col bg-neutral-1 border border-neutral-3 rounded-3xl">
          <Box p="md" class="flex items-center justify-between gap-2">
            <Button as="a" href="/" size="sm">
              home
            </Button>
            <Box as="h1" mr="sm" class="font-mono text-xl">
              foo
            </Box>
          </Box>
          <Box class="w-60 h-px bg-neutral-3" />
          <Box p="md" class="flex items-center justify-center gap-2">
            <Button as="a" href="/foo" color="primary" size="sm">
              foo
            </Button>
            <Button as="a" href="/bar" size="sm">
              bar
            </Button>
            <Button as="a" href="/baz" size="sm">
              baz
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
