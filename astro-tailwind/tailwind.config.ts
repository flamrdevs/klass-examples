import type { Config } from "tailwindcss";

import coloradix, { gray, iris, red, green, orange, blue } from "@coloradix/tailwindcss";

const radix = coloradix({ gray, iris, red, green, orange, blue })
  .alias({
    neutral: "gray",
    primary: "iris",
    error: "red",
    success: "green",
    warning: "orange",
    info: "blue",
  })
  .build();

export default {
  content: ["./src/**/*.{ts,astro}"],
  safelist: (() => {
    const responsive = (...classNames: string[]) => {
      const result: string[] = [];
      for (const className of classNames) {
        result.push(className);
        for (const screen of ["sm", "md", "lg", "xl", "2xl"]) {
          result.push(`${screen}:${className}`);
        }
      }
      return result;
    };

    const spacing = ($: string) => [`${$}-1`, `${$}-2`, `${$}-3`, `${$}-5`, `${$}-8`];

    return [
      ...responsive(
        ...spacing("m"),
        ...spacing("mx"),
        ...spacing("my"),
        ...spacing("mt"),
        ...spacing("mr"),
        ...spacing("mb"),
        ...spacing("ml"),
        ...spacing("p"),
        ...spacing("px"),
        ...spacing("py"),
        ...spacing("pt"),
        ...spacing("pr"),
        ...spacing("pb"),
        ...spacing("pl")
      ),
    ];
  })(),
  theme: { colors: { transparent: "transparent", current: "currentColor", ...radix.colors } },
  plugins: [radix.plugin],
} as Config;
