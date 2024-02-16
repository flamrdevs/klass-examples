// @refresh reload
import { Suspense } from "solid-js";
import { Router } from "@solidjs/router";
import { MetaProvider, Title, Meta } from "@solidjs/meta";
import { FileRoutes } from "@solidjs/start";

import "./globals.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>solid-start-tailwind</Title>
          <Meta name="description" content="klass example with solid-start + tailwindcss" />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
