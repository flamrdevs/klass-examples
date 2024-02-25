import { Head } from "$fresh/runtime.ts";

import { Box } from "./../components/ui/index.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
        <meta name="description" content="Page not found" />
      </Head>

      <Box class="flex items-center justify-center w-dvw h-dvh overflow-hidden">
        <Box as="h1" class="font-mono">
          404 - Page not found
        </Box>
      </Box>
    </>
  );
}
