import core, { type Config } from "@klass/core/setup";
import vue from "@klass/vue/setup";

const config: Config = {};

export const [klass, reklass] = core(config);
export const [klassed, reklassed] = vue(config);
