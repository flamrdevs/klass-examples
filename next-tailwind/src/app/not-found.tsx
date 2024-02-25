import type { Metadata } from "next";

import { Box } from "@/components/ui";

export const metadata: Metadata = {
  title: "404 - Page not found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <Box className="flex items-center justify-center w-dvw h-dvh overflow-hidden">
      <Box as="h1" className="font-mono">
        404 - Page not found
      </Box>
    </Box>
  );
}
