import { useState } from "react";
import type { SVGProps } from "react";

import { klassed, reklassed } from "@klass/react";

import ThemeService from "theme-service";

const conditions = {
  base: "",
  xs: "@xs",
  sm: "@sm",
  md: "@md",
  lg: "@lg",
  xl: "@xl",
};

const defaultCondition = "base" satisfies keyof typeof conditions;

const spacing = (property: string) => {
  return {
    "0": `${property}:0`,
    "1": `${property}:1`,
    "2": `${property}:2`,
    "3": `${property}:3`,
    "4": `${property}:4`,
    "5": `${property}:5`,
    "6": `${property}:6`,
    "7": `${property}:7`,
    "8": `${property}:8`,
  };
};

const Box = reklassed(
  "div",
  {
    conditions,
    defaultCondition,
    variants: {
      d: {
        none: "hidden",
        block: "block",
        flex: "flex",
        iblock: "inline-block",
        iflex: "inline-flex",
      },
      ps: {
        rel: "rel",
        abs: "abs",
        fix: "fixed",
        sti: "sticky",
      },
      t: spacing("top"),
      r: spacing("right"),
      b: spacing("bottom"),
      l: spacing("left"),
      m: spacing("m"),
      mx: spacing("mx"),
      my: spacing("my"),
      mt: spacing("mt"),
      mr: spacing("mr"),
      mb: spacing("mb"),
      ml: spacing("ml"),
      p: spacing("p"),
      px: spacing("px"),
      py: spacing("py"),
      pt: spacing("pt"),
      pr: spacing("pr"),
      pb: spacing("pb"),
      pl: spacing("pl"),
      gap: spacing("gap"),
    },
  },
  {
    as: "suffix",
  }
);

const Button = klassed(
  "button",
  {
    base: ["inline-flex align-items:center justify-content:center outline:none r:8"],
    variants: {
      color: {
        neutral: "bg:neutral-3 bg:neutral-4:hover bg:neutral-5:active fg:neutral-11",
        primary: "bg:primary-3 bg:primary-4:hover bg:primary-5:active fg:primary-11",
      },
      size: {
        sm: "px:8 py:3 h:1.5rem font-weight:normal font-size:12",
        md: "px:10 py:4 h:1.75rem font-weight:medium font-size:16",
        lg: "px:12 py:5 h:2rem font-weight:bold font-size:20",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
    },
  },
  {
    dp: {
      type: "button",
    },
  }
);

const IconButton = klassed(
  "button",
  {
    base: ["inline-flex align-items:center justify-content:center outline:none r:8"],
    variants: {
      color: {
        neutral: "bg:neutral-3 bg:neutral-4:hover bg:neutral-5:active fg:neutral-11",
        primary: "bg:primary-3 bg:primary-4:hover bg:primary-5:active fg:primary-11",
      },
      size: {
        sm: "p:2 w:1.5rem h:1.5rem",
        md: "p:2.5 w:1.75rem h:1.75rem",
        lg: "p:4 w:2rem h:2rem",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
    },
  },
  {
    dp: {
      type: "button",
    },
  }
);

const LucideGithubIcon = ({ size = 20, ...props }: SVGProps<SVGSVGElement> & { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-github"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
};

const LucideMoonIcon = ({ size = 20, ...props }: SVGProps<SVGSVGElement> & { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-moon"
      {...props}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
};

const LucideSunIcon = ({ size = 20, ...props }: SVGProps<SVGSVGElement> & { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-sun"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
};

const themeService = new ThemeService({ init: true, default: "dark", store: "klass:theme" });

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(themeService.value as any);

  const toggleTheme = () => {
    setTheme((theme) => {
      const next = theme === "dark" ? "light" : "dark";
      themeService.switch(next);
      return next;
    });
  };

  return (
    <Box d="iflex" className="align-items:center justify-content:center w:100vw h:100vh">
      <Box d="flex" my="8" p={{ base: "0", sm: "1", md: "2", lg: "3" }} gap="4">
        <Button>klass</Button>
        <IconButton onClick={toggleTheme}>{theme === "dark" ? <LucideSunIcon /> : <LucideMoonIcon />}</IconButton>
        <IconButton as="a" href="https://github.com/flamrdevs/klass">
          <LucideGithubIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default App;
