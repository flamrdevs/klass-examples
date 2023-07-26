import type { SVGProps } from "react";

import type { VariantsOf } from "@klass/core";
import { klassed, reklassed } from "@klass/react";

const conditions = {
  base: "",
  sm: "sm:",
  md: "md:",
  lg: "lg:",
  xl: "xl:",
  xxl: "2xl:",
};

const defaultCondition = "base" satisfies keyof typeof conditions;

const spacing = (property: string) => {
  return {
    "0": `${property}-0`,
    "1": `${property}-1`,
    "2": `${property}-2`,
    "3": `${property}-3`,
    "4": `${property}-4`,
    "5": `${property}-5`,
    "6": `${property}-6`,
    "7": `${property}-7`,
    "8": `${property}-8`,
  };
};

export type BoxVariants = VariantsOf<(typeof Box)["reklass"]>;
export const Box = reklassed("div", {
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
      rel: "relative",
      abs: "absolute",
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
  },
});

export type ContainerVariants = VariantsOf<(typeof Container)["klass"]>;
export const Container = klassed("div", {
  base: "container",
  variants: {
    center: {
      true: "mx-auto",
    },
    max: {
      xs: "max-w-screen-xs",
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
    },
  },
  defaultVariants: {
    center: true,
  },
});

export type ButtonVariants = VariantsOf<(typeof Button)["klass"]>;
export const Button = klassed(
  "button",
  {
    base: ["inline-flex items-center justify-center outline-none focus-visible:ring-1 rounded-xl"],
    variants: {
      color: {
        neutral: "bg-neutral-3 hover:bg-neutral-4 active:bg-neutral-5 focus-visible:ring-neutral-5 text-neutral-11",
        primary: "bg-primary-3 hover:bg-primary-4 active:bg-primary-5 focus-visible:ring-primary-5 text-primary-11",
      },
      size: {
        sm: "px-4 py-1.5 h-7 font-normal text-base",
        md: "px-5 py-2 h-9 font-medium text-lg",
        lg: "px-6 py-2.5 h-11 font-bold text-xl",
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

export type IconButtonVariants = VariantsOf<(typeof IconButton)["klass"]>;
export const IconButton = klassed(
  "button",
  {
    base: ["inline-flex items-center justify-center outline-none focus-visible:ring-1 rounded-xl"],
    variants: {
      color: {
        neutral: "bg-neutral-3 hover:bg-neutral-4 active:bg-neutral-5 focus-visible:ring-neutral-5 text-neutral-11",
        primary: "bg-primary-3 hover:bg-primary-4 active:bg-primary-5 focus-visible:ring-primary-5 text-primary-11",
      },
      size: {
        sm: "p-1 w-7 h-7",
        md: "p-1.5 w-9 h-9",
        lg: "p-2 w-11 h-11",
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

export type TextVariants = VariantsOf<(typeof Text)["klass"]>;
export const Text = klassed("div", {
  variants: {
    inline: {
      true: "inline-block",
      false: "block",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    color: {
      neutral: "text-neutral-12",
      primary: "text-primary-12",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      x2l: "text-2xl",
      x3l: "text-3xl",
      x4l: "text-4xl",
      x5l: "text-5xl",
      x6l: "text-6xl",
      x7l: "text-7xl",
      x8l: "text-8xl",
      x9l: "text-9xl",
    },
    weight: {
      300: "font-light",
      400: "font-normal",
      500: "font-medium",
      600: "font-semibold",
      700: "font-bold",
    },
  },
  defaultVariants: {
    inline: false,
    color: "neutral",
    size: "md",
  },
});

export const LucideGithubIcon = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) => {
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

export const LucideMoonIcon = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) => {
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

export const LucideSunIcon = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) => {
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
