import { component$, Slot } from "@builder.io/qwik";

import type { ClassValue } from "@klass/core";

import * as ButtonKlass from "./Button.klass";

type ButtonProps = { class?: ClassValue } & ButtonKlass.RootVariants;

const Button = component$<ButtonProps>(({ color, size, class: className, ...props }) => {
  return (
    <button type="button" {...props} class={ButtonKlass.Root({ color, size }, [className])}>
      <Slot />
    </button>
  );
});

export type { ButtonProps };
export default Button;
