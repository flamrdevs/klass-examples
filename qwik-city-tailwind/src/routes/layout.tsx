import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const head: DocumentHead = ({ head }) => {
  const description = head.meta.find((meta) => meta.name === "description");
  return {
    title: head.title || "qwik-city-tailwind",
    meta: [
      {
        name: "description",
        content: description?.content || "klass example with qwik-city + tailwindcss",
      },
    ],
  };
};

export default component$(() => {
  return <Slot />;
});
