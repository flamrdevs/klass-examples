import { useEffect, useState } from "preact/hooks";

import ixstorage from "ixstorage";

import { Box, Button, IconButton } from "~/components/ui";
import { IconMoon, IconSun } from "~/components/icons";

import css from "./app.module.css";

const storage = ixstorage<boolean>("klass:dark", true);

export function App() {
  const [dark, setDark] = useState<boolean>(() => storage.get());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    storage.set(dark);
  }, [dark]);

  const toggleDark = () => {
    setDark((dark) => !dark);
  };

  return (
    <>
      <Box as="main" p={{ base: "lg", sm: "xl" }} class="container mx-auto max-w-screen-md">
        <Box as="section" class="flex flex-col border-2 border-neutral-3 rounded-3xl overflow-hidden min-h-96 shadow">
          <Box class={[css["boxes-pattern"], "relative flex-grow overflow-hidden"]}>
            <Box class="absolute inset-0 z-10 flex flex-wrap items-center justify-center gap-4">
              <Button as="a" href="https://github.com/flamrdevs/klass" target="_blank">
                GitHub
              </Button>
              <IconButton onClick={toggleDark}>{dark ? <IconSun /> : <IconMoon />}</IconButton>
            </Box>
          </Box>
          <Box class="flex-shrink-0 flex items-center border-t border-t-neutral-4 px-4 pb-2 h-16 bg-gradient-to-tr from-neutral-3 to-neutral-2 text-neutral-11 font-bold text-xl lg:text-2xl">
            klass + preact + unocss
          </Box>
        </Box>
      </Box>
    </>
  );
}
