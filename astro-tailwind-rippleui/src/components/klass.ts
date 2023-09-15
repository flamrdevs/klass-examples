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
  base: ["btn"],
  variants: {
    color: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      success: "btn-success",
      error: "btn-error",
      warning: "btn-warning",
    },
    circle: {
      true: "btn-circle",
    },
    block: {
      true: "btn-block",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      xl: "btn-xl",
    },
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
      some: "",
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
    color: "some",
    size: "md",
  },
});
