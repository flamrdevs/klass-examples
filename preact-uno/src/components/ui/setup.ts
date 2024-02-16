import core, { type Config } from "@klass/core/setup";
import preact from "@klass/preact/setup";

const config: Config = {};

export const [klass, reklass] = core(config);
export const [klassed, reklassed] = preact(config);
