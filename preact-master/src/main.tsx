import { render } from "preact";

import { initRuntime } from "@master/css";
import config from "../master.css.ts";

import { App } from "./app.tsx";

import "./globals.css";

initRuntime(config);

render(<App />, document.getElementById("app")!);
