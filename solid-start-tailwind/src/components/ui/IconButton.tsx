import type { VariantsOf } from "@klass/core";
import { klassed } from "./setup";

const IconButton = klassed(
  "button",
  {
    base: ["inline-flex items-center justify-center outline-none rounded-xl", "focus-visible:ring-2 focus-visible:ring-offset-2"],
    variants: {
      color: {
        neutral: [
          "bg-neutral-3 text-neutral-11",
          "hover:bg-neutral-4",
          "active:bg-neutral-5",
          "focus-visible:ring-neutral-6 focus-visible:ring-offset-neutral-1",
        ],
        primary: [
          "bg-primary-3 text-primary-11",
          "hover:bg-primary-4",
          "active:bg-primary-5",
          "focus-visible:ring-primary-6 focus-visible:ring-offset-primary-1",
        ],
      },
      size: {
        sm: ["w-9 h-9", "font-medium text-base"],
        md: ["w-10 h-10", "font-medium text-base"],
        lg: ["w-11 h-11", "font-bold text-lg"],
      },
    },
    defaults: {
      color: "neutral",
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
export default IconButton;
