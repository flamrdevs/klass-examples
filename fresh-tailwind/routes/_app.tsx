import type { PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";

export default function App({ Component }: PageProps) {
  return (
    <html data-theme="dark">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-tailwind</title>
        <meta name="description" content="klass example with fresh + tailwindcss" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body f-client-nav>
        <Partial name="body">
          <Component />
        </Partial>
      </body>
    </html>
  );
}
