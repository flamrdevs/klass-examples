import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="flex items-center justify-center w-dvw h-dvh overflow-hidden">
        <h1>404 - Page not found</h1>
      </div>
    </>
  );
}
