/* @refresh reload */
import { render } from "solid-js/web";

import App from "./App";

import "~/styles/globals.ts";

const root = document.getElementById("root");

render(() => <App />, root!);
