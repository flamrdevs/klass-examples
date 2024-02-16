import { render } from "preact";
import { App } from "./app.tsx";

import "~/styles/globals.ts";

render(<App />, document.getElementById("app")!);
