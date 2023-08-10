import type { VariantsOf } from "@klass/core";
import { klass } from "@klass/core";

export type RootVariants = VariantsOf<typeof Root>;
export const Root = klass({
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
