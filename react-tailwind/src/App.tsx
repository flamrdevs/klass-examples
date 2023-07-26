import { useState } from "react";

import { NavLink, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { Box, Button, Container, IconButton, LucideGithubIcon, LucideMoonIcon, LucideSunIcon, Text } from "./components";

const HomePage = () => {
  return (
    <Box>
      <Text align="center" size="xl" weight={500}>
        Home
      </Text>
    </Box>
  );
};

const UIPage = () => {
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

          <Box d="flex" m="1" p="5" className="bg-polka-neutral items-center gap-2 border border-neutral-3 rounded-lg">
            <Button color="neutral">neutral</Button>
            <Button color="primary">primary</Button>
          </Box>
        </Box>

        <Box px="5" py="2">
          <Text weight={500}>Size</Text>

          <Box d="flex" m="1" p="5" className="bg-polka-neutral items-center gap-2 border border-neutral-3 rounded-lg">
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

          <Box d="flex" m="1" p="5" className="bg-polka-neutral items-center gap-2 border border-neutral-3 rounded-lg">
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

          <Box d="flex" m="1" p="5" className="bg-polka-neutral items-center gap-2 border border-neutral-3 rounded-lg">
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

const NotFoundPage = () => {
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

const router = createBrowserRouter([
  {
    Component: () => {
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
            <Box d="flex" p="1" className="items-center justify-between h-16">
              <Text as="h1" size="lg" weight={600}>
                Klass + React + Tailwind
              </Text>

              <Box as="ul" d="flex" className="items-center gap-4">
                <Box as="li">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      Text.klass({ size: "lg", weight: 600 }, [
                        "px-4 outline-none focus-visible:ring-1 focus-visible:ring-primary-6 hover:underline rounded-xl",
                        isActive && "bg-primary-9 text-white",
                      ])
                    }
                  >
                    Home
                  </NavLink>
                </Box>
                <Box as="li">
                  <NavLink
                    to="/ui"
                    className={({ isActive }) =>
                      Text.klass({ size: "lg", weight: 600 }, [
                        "px-4 outline-none focus-visible:ring-1 focus-visible:ring-primary-6 hover:underline rounded-xl",
                        isActive && "bg-primary-9 text-white",
                      ])
                    }
                  >
                    UI
                  </NavLink>
                </Box>
              </Box>

              <Box d="flex" className="gap-2">
                <IconButton onClick={toggleTheme}>{theme === "dark" ? <LucideSunIcon /> : <LucideMoonIcon />}</IconButton>
                <IconButton as="a" href="https://github.com/flamrdevs/klass">
                  <LucideGithubIcon />
                </IconButton>
              </Box>
            </Box>
          </Container>

          <Container as="main" max="md">
            <Outlet />
          </Container>
        </>
      );
    },
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "ui",
        element: <UIPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
