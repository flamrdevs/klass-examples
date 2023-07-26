import type { Config } from "tailwindcss";

import coloradix, { gray, indigo } from "@coloradix/tailwindcss";

const responsive = (...classNames: string[]) => {
  let result: string[] = [];
  classNames.forEach((className) =>
    result.push(className, ...["sm", "md", "lg", "xl", "2xl"].map((breakpoint) => `${breakpoint}:${className}`))
  );
  return result;
};

const spacing = (property: string) => {
  return [
    `${property}-0`,
    `${property}-1`,
    `${property}-2`,
    `${property}-3`,
    `${property}-4`,
    `${property}-5`,
    `${property}-6`,
    `${property}-7`,
    `${property}-8`,
  ];
};

const safelist = [
  ...responsive("hidden", "block", "flex", "inline-block", "inline-flex"),
  ...responsive("relative", "absolute", "fixed", "sticky"),
  ...responsive(...spacing("top"), ...spacing("right"), ...spacing("bottom"), ...spacing("left")),
  ...responsive(
    ...spacing("m"),
    ...spacing("mx"),
    ...spacing("my"),
    ...spacing("mt"),
    ...spacing("mr"),
    ...spacing("mb"),
    ...spacing("ml")
  ),
  ...responsive(
    ...spacing("p"),
    ...spacing("px"),
    ...spacing("py"),
    ...spacing("pt"),
    ...spacing("pr"),
    ...spacing("pb"),
    ...spacing("pl")
  ),
];

const radix = coloradix({
  gray,
  indigo,
})
  .alias({
    neutral: "gray",
    primary: "indigo",
  })
  .overlay(true)
  .enable(true);

export default {
  content: ["src/**/*.{ts,astro}"],
  safelist,
  theme: {
    colors: radix.colors,
  },
  plugins: [radix.plugin],
} satisfies Config;
