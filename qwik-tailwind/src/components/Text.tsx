import { component$, Slot } from "@builder.io/qwik";

import type { ClassValue } from "@klass/core";

import * as TextKlass from "./Text.klass";

type TextProps = { class?: ClassValue } & TextKlass.RootVariants;

const Text = component$<TextProps>(({ inline, align, color, size, weight, class: className, ...props }) => {
  return (
    <div {...props} class={TextKlass.Root({ inline, align, color, size, weight }, [className])}>
      <Slot />
    </div>
  );
});

export type { TextProps };
export default Text;
