import { component$, Slot } from "@builder.io/qwik";

import type { ClassValue } from "@klass/core";

import * as IconButtonKlass from "./IconButton.klass";

type IconButtonProps = { class?: ClassValue } & IconButtonKlass.RootVariants;

const IconButton = component$<IconButtonProps>(({ color, size, class: className, ...props }) => {
  return (
    <button type="button" {...props} class={IconButtonKlass.Root({ color, size }, [className])}>
      <Slot />
    </button>
  );
});

export type { IconButtonProps };
export default IconButton;
