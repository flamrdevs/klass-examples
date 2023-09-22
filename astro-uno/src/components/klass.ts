import { klass, reklass } from "@klass/core";
import type { VariantsOf } from "@klass/core";

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

export type BoxVariants = VariantsOf<typeof Box>;
export const Box = reklass({
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

export type ContainerVariants = VariantsOf<typeof Container>;
export const Container = klass({
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

export type ButtonVariants = VariantsOf<typeof Button>;
export const Button = klass({
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
});

export type IconButtonVariants = VariantsOf<typeof IconButton>;
export const IconButton = klass({
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
});

export type TextVariants = VariantsOf<typeof Text>;
export const Text = klass({
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
