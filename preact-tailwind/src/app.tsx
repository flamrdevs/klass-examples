import { useState } from "preact/hooks";

import { Router, RoutableProps } from "preact-router";
import { Link } from "preact-router/match";

import { Box, Button, Container, IconButton, LucideGithubIcon, LucideMoonIcon, LucideSunIcon, Text } from "./components";

const HomePage = ({}: RoutableProps) => {
  return (
    <Box>
      <Text align="center" size="xl" weight={500}>
        Home
      </Text>
    </Box>
  );
};

const UIPage = ({}: RoutableProps) => {
  return (
    <Box>
      <Text align="center" size="xl" weight={500}>
        UI
      </Text>

      <Box p="4">
        <Text size="lg" weight={500}>
          # Button
        </Text>

        <Box px="5" py="2">
          <Text weight={500}>Color</Text>

          <Box d="flex" m="1" p="5" class="bg-polka-neutral items-center gap-2 border border-neutral-3 rounded-lg">
            <Button color="neutral">neutral</Button>
            <Button color="primary">primary</Button>
          </Box>
        </Box>

        <Box px="5" py="2">
          <Text weight={500}>Size</Text>

          <Box d="flex" m="1" p="5" class="bg-polka-neutral items-center gap-2 border border-neutral-3 rounded-lg">
            <Button size="sm">small</Button>
            <Button size="md">medium</Button>
            <Button size="lg">large</Button>
          </Box>
        </Box>
      </Box>

      <Box p="4">
        <Text size="lg" weight={500}>
          # Icon Button
        </Text>

        <Box px="5" py="2">
          <Text weight={500}>Color</Text>

          <Box d="flex" m="1" p="5" class="bg-polka-neutral items-center gap-2 border border-neutral-3 rounded-lg">
            <IconButton color="neutral">
              <LucideGithubIcon />
            </IconButton>
            <IconButton color="primary">
              <LucideGithubIcon />
            </IconButton>
          </Box>
        </Box>

        <Box px="5" py="2">
          <Text weight={500}>Size</Text>

          <Box d="flex" m="1" p="5" class="bg-polka-neutral items-center gap-2 border border-neutral-3 rounded-lg">
            <IconButton size="sm">
              <LucideGithubIcon size={16} />
            </IconButton>
            <IconButton size="md">
              <LucideGithubIcon size={24} />
            </IconButton>
            <IconButton size="lg">
              <LucideGithubIcon size={32} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const NotFoundPage = ({}: RoutableProps) => {
  return (
    <Box>
      <Text align="center" size="xl" weight={500}>
        404 | Page not found
      </Text>
    </Box>
  );
};

let initialTheme = localStorage.getItem("klass:theme");
if (initialTheme !== "light" && initialTheme !== "dark") initialTheme = "dark";
document.documentElement.setAttribute("data-theme", initialTheme);

export function App() {
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme as any);

  const toggleTheme = () => {
    setTheme((theme) => {
      const next = theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("klass:theme", next);
      return next;
    });
  };

  return (
    <>
      <Container as="header" max="md">
        <Box d="flex" p="1" class="items-center justify-between h-16">
          <Text as="h1" size="lg" weight={600}>
            Klass + Preact + Tailwind
          </Text>

          <Box as="ul" d="flex" class="items-center gap-4">
            <Box as="li">
              <Link
                href="/"
                class={Text.klass(
                  { size: "lg", weight: 600 },
                  "px-4 outline-none focus-visible:ring-1 focus-visible:ring-primary-6 hover:underline rounded-xl"
                )}
                activeClassName="bg-primary-9 text-white"
              >
                Home
              </Link>
            </Box>
            <Box as="li">
              <Link
                href="/ui"
                class={Text.klass(
                  { size: "lg", weight: 600 },
                  "px-4 outline-none focus-visible:ring-1 focus-visible:ring-primary-6 hover:underline rounded-xl"
                )}
                activeClassName="bg-primary-9 text-white"
              >
                UI
              </Link>
            </Box>
          </Box>

          <Box d="flex" class="gap-2">
            <IconButton onClick={toggleTheme}>{theme === "dark" ? <LucideSunIcon /> : <LucideMoonIcon />}</IconButton>
            <IconButton as="a" href="https://github.com/flamrdevs/klass">
              <LucideGithubIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      <Container as="main" max="md">
        <Router>
          <HomePage path="/" />
          <UIPage path="/ui" />
          <NotFoundPage default />
        </Router>
      </Container>
    </>
  );
}
