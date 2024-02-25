import { Meta, Title } from "@solidjs/meta";

import { Box } from "~/components/ui";

export default function All() {
  return (
    <>
      <>
        <Title>404 - Page not found</Title>
        <Meta name="description" content="Page not found" />
      </>

      <Box class="flex items-center justify-center w-dvw h-dvh overflow-hidden">
        <Box as="h1" class="font-mono">
          404 - Page not found
        </Box>
      </Box>
    </>
  );
}
