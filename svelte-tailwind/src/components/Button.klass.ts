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
