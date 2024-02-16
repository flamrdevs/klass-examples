import core, { type Config } from "@klass/core/setup";
import qwik from "@klass/qwik/setup";

import { twMerge } from "tailwind-merge";

const config: Config = {
  end: twMerge,
};

export const [klass, reklass] = core(config);
export const [klassed, reklassed] = qwik(config);
