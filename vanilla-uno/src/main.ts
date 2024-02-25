import { klass } from "@klass/core";

import "./styles/globals";

const button = klass({
  base: "inline-flex items-center justify-center px-5 h-10 outline-none focus-visible:outline-2 border border-transparent rounded-2xl font-mono text-xl font-medium",
  variants: {
    color: {
      red: "bg-red-700 hover:bg-red-800 focus-visible:outline-red-900 text-white",
      green: "bg-green-700 hover:bg-green-800 focus-visible:outline-green-900 text-white",
      blue: "bg-blue-700 hover:bg-blue-800 focus-visible:outline-blue-900 text-white",
    },
  },
  defaults: {
    color: "blue",
  },
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `<main class="inline-flex items-center justify-center w-100dvw h-100dvh">
  <div class="flex gap-2">
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
