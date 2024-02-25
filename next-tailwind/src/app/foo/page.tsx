import type { Metadata } from "next";
import Link from "next/link";

import { Box, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "foo",
  description: "foo",
};

export default function Foo() {
  return (
    <Box className="flex items-center justify-center w-dvw h-dvh overflow-hidden">
      <Box className="flex flex-col bg-neutral-1 border border-neutral-3 rounded-3xl">
        <Box p="md" className="flex items-center justify-between gap-2">
          <Button as={Link} href="/" size="sm">
            home
          </Button>
          <Box as="h1" mr="sm" className="font-mono text-xl">
            foo
          </Box>
        </Box>
        <Box className="w-60 h-px bg-neutral-3" />
        <Box p="md" className="flex items-center justify-center gap-2">
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
}
