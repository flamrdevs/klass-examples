<script lang="ts" context="module">
  export type ButtonProps = { class?: ClassValue } & ButtonKlass.RootVariants;
</script>

<script lang="ts">
  import type { ClassValue } from "@klass/core";

  import * as ButtonKlass from "./Button.klass";

  export let color: ButtonProps["color"] | undefined = ButtonKlass.Root.o.defaultVariants.color;
  export let size: ButtonProps["size"] | undefined = ButtonKlass.Root.o.defaultVariants.size;

  let _class: ButtonProps["class"] = undefined;
  export { _class as class };

  let className: string = undefined;
  $: className = ButtonKlass.Root({ color, size }, [_class]);
</script>

<button type="button" {...$$restProps} class={className}>
  <slot />
</button>
