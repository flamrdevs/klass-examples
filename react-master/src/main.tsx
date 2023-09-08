import React from "react";
import ReactDOM from "react-dom/client";

import { initRuntime } from "@master/css";
import config from "../master.css.ts";

import App from "./App.tsx";

import "./globals.css";

initRuntime(config);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
