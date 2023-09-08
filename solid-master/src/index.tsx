/* @refresh reload */
import { render } from "solid-js/web";

import { initRuntime } from "@master/css";
import config from "../master.css.ts";

import "./globals.css";

import App from "./App";

initRuntime(config);

const root = document.getElementById("root");

render(() => <App />, root!);
