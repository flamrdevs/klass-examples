import { component$, Slot } from "@builder.io/qwik";

import type { ClassValue } from "@klass/core";

import * as ContainerKlass from "./Container.klass";

type ContainerProps = { class?: ClassValue } & ContainerKlass.RootVariants;

const Container = component$<ContainerProps>(({ center, max, class: className, ...props }) => {
  return (
    <div {...props} class={ContainerKlass.Root({ center, max }, [className])}>
      <Slot />
    </div>
  );
});

export type { ContainerProps };
export default Container;
