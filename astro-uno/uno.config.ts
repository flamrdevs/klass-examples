import { defineConfig } from "unocss";

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

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.(astro)($|\?)/, "src/**/*.{js,ts}"],
    },
  },
  safelist,
  theme: {
    colors: {
      neutral: {
        1: "hsl(var(--neutral-1))",
        2: "hsl(var(--neutral-2))",
        3: "hsl(var(--neutral-3))",
        4: "hsl(var(--neutral-4))",
        5: "hsl(var(--neutral-5))",
        6: "hsl(var(--neutral-6))",
        7: "hsl(var(--neutral-7))",
        8: "hsl(var(--neutral-8))",
        9: "hsl(var(--neutral-9))",
        10: "hsl(var(--neutral-10))",
        11: "hsl(var(--neutral-11))",
        12: "hsl(var(--neutral-12))",
      },
      primary: {
        1: "hsl(var(--primary-1))",
        2: "hsl(var(--primary-2))",
        3: "hsl(var(--primary-3))",
        4: "hsl(var(--primary-4))",
        5: "hsl(var(--primary-5))",
        6: "hsl(var(--primary-6))",
        7: "hsl(var(--primary-7))",
        8: "hsl(var(--primary-8))",
        9: "hsl(var(--primary-9))",
        10: "hsl(var(--primary-10))",
        11: "hsl(var(--primary-11))",
        12: "hsl(var(--primary-12))",
      },
    },
  },
});
