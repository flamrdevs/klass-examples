import { klass, reklass } from "@klass/core";
import type { VariantsOf } from "@klass/core";

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

export type BoxVariants = VariantsOf<typeof Box>;
export const Box = reklass(
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

export type ButtonVariants = VariantsOf<typeof Button>;
export const Button = klass({
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
});

export type IconButtonVariants = VariantsOf<typeof IconButton>;
export const IconButton = klass({
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
});
