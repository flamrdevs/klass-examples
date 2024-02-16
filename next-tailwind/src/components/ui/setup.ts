import core, { type Config } from "@klass/core/setup";
import react from "@klass/react/setup";

import { twMerge } from "tailwind-merge";

const config: Config = {
  end: twMerge,
};

export const [klass, reklass] = core(config);
export const [klassed, reklassed] = react(config);
