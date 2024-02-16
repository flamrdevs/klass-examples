import core, { type Config } from "@klass/core/setup";
import qwik from "@klass/qwik/setup";

const config: Config = {};

export const [klass, reklass] = core(config);
export const [klassed, reklassed] = qwik(config);
