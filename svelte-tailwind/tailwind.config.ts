import type { Config } from "tailwindcss";

import coloradix, { gray, iris } from "@coloradix/tailwindcss";

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
  iris,
})
  .alias({
    neutral: "gray",
    primary: "iris",
  })
  .build();

export default {
  content: ["src/**/*.{ts,svelte}"],
  safelist,
  theme: {
    colors: radix.colors,
  },
  plugins: [radix.plugin],
} satisfies Config;
