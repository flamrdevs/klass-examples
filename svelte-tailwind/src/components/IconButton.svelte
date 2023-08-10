<script lang="ts" context="module">
  export type IconButtonProps = { class?: ClassValue } & IconButtonKlass.RootVariants;
</script>

<script lang="ts">
  import type { ClassValue } from "@klass/core";

  import * as IconButtonKlass from "./IconButton.klass";

  export let color: IconButtonProps["color"] | undefined = IconButtonKlass.Root.o.defaultVariants.color;
  export let size: IconButtonProps["size"] | undefined = IconButtonKlass.Root.o.defaultVariants.size;

  let _class: IconButtonProps["class"] = undefined;
  export { _class as class };

  let className: string = undefined;
  $: className = IconButtonKlass.Root({ color, size }, [_class]);
</script>

<button type="button" {...$$restProps} class={className}>
  <slot />
</button>
