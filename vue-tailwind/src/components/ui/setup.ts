import core, { type Config } from "@klass/core/setup";
import vue from "@klass/vue/setup";

import { twMerge } from "tailwind-merge";

const config: Config = {
  end: twMerge,
};

export const [klass, reklass] = core(config);
export const [klassed, reklassed] = vue(config);
