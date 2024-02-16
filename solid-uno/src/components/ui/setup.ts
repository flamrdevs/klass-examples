import core, { type Config } from "@klass/core/setup";
import solid from "@klass/solid/setup";

const config: Config = {};

export const [klass, reklass] = core(config);
export const [klassed, reklassed] = solid(config);
