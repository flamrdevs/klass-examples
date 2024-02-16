import core, { type Config } from "@klass/core/setup";

import { twMerge } from "tailwind-merge";

const config: Config = {
  end: twMerge,
};

export const [klass, reklass] = core(config);
