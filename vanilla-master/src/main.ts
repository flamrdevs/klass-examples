import { initCSSRuntime } from "@master/css-runtime";

import { klass } from "@klass/core";

import "./styles/globals";

import config from "./../master.css";

initCSSRuntime(config);

const button = klass({
  base: "inline-flex align-items:center justify-content:center px:16 h:36 outline:none outline-offset:2 b:1|transparent r:16 font:mono font:20 font:medium",
  variants: {
    color: {
      red: "bg:red-70 bg:red-80:hover outline:2|red-90:focus-visible text:white",
      green: "bg:green-70 bg:green-80:hover outline:2|green-90:focus-visible text:white",
      blue: "bg:blue-70 bg:blue-80:hover outline:2|blue-90:focus-visible text:white",
    },
  },
  defaults: {
    color: "blue",
  },
});

document.querySelector<HTMLDivElement>(
  "#app"
)!.innerHTML = `<main class="inline-flex align-items:center justify-content:center w:100dvw h:100dvh">
  <div class="flex gap:8">
    <button class="${button({ color: "red" })}">
      red
    </button>
    <button class="${button({ color: "green" })}">
      green
    </button>
    <button class="${button({ color: "blue" })}">
      blue
    </button>
  </div>
</main>`;
