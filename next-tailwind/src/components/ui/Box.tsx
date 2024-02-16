import type { VariantsOf } from "@klass/core";
import { reklassed } from "./setup";

const Box = reklassed("div", {
  conditions: [
    {
      base: "",
      sm: "sm:",
      md: "md:",
      lg: "lg:",
      xl: "xl:",
      xxl: "2xl:",
    },
    "base",
  ],
  variants: {
    m: {
      xs: "m-1",
      sm: "m-2",
      md: "m-3",
      lg: "m-5",
      xl: "m-8",
    },
    mx: {
      xs: "mx-1",
      sm: "mx-2",
      md: "mx-3",
      lg: "mx-5",
      xl: "mx-8",
    },
    my: {
      xs: "my-1",
      sm: "my-2",
      md: "my-3",
      lg: "my-5",
      xl: "my-8",
    },
    mt: {
      xs: "mt-1",
      sm: "mt-2",
      md: "mt-3",
      lg: "mt-5",
      xl: "mt-8",
    },
    mr: {
      xs: "mr-1",
      sm: "mr-2",
      md: "mr-3",
      lg: "mr-5",
      xl: "mr-8",
    },
    mb: {
      xs: "mb-1",
      sm: "mb-2",
      md: "mb-3",
      lg: "mb-5",
      xl: "mb-8",
    },
    ml: {
      xs: "ml-1",
      sm: "ml-2",
      md: "ml-3",
      lg: "ml-5",
      xl: "ml-8",
    },
    p: {
      xs: "p-1",
      sm: "p-2",
      md: "p-3",
      lg: "p-5",
      xl: "p-8",
    },
    px: {
      xs: "px-1",
      sm: "px-2",
      md: "px-3",
      lg: "px-5",
      xl: "px-8",
    },
    py: {
      xs: "py-1",
      sm: "py-2",
      md: "py-3",
      lg: "py-5",
      xl: "py-8",
    },
    pt: {
      xs: "pt-1",
      sm: "pt-2",
      md: "pt-3",
      lg: "pt-5",
      xl: "pt-8",
    },
    pr: {
      xs: "pr-1",
      sm: "pr-2",
      md: "pr-3",
      lg: "pr-5",
      xl: "pr-8",
    },
    pb: {
      xs: "pb-1",
      sm: "pb-2",
      md: "pb-3",
      lg: "pb-5",
      xl: "pb-8",
    },
    pl: {
      xs: "pl-1",
      sm: "pl-2",
      md: "pl-3",
      lg: "pl-5",
      xl: "pl-8",
    },
  },
});

if (process.env.NODE_ENV === "development") Box.displayName = "Box";

export type BoxVariants = VariantsOf<(typeof Box)["reklass"]>;
export default Box;
