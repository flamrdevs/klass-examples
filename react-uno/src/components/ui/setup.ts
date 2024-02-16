import core, { type Config } from "@klass/core/setup";
import react from "@klass/react/setup";

const config: Config = {};

export const [klass, reklass] = core(config);
export const [klassed, reklassed] = react(config);
