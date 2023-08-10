import type { VariantsOf } from "@klass/core";
import { klass } from "@klass/core";

export type RootVariants = VariantsOf<typeof Root>;
export const Root = klass({
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
