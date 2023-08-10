<script lang="ts" context="module">
  export type TextProps = { class?: ClassValue } & TextKlass.RootVariants;
</script>

<script lang="ts">
  import type { ClassValue } from "@klass/core";

  import * as TextKlass from "./Text.klass";

  export let inline: TextProps["inline"] | undefined = TextKlass.Root.o.defaultVariants.inline;
  export let align: TextProps["align"] | undefined = TextKlass.Root.o.defaultVariants.align;
  export let color: TextProps["color"] | undefined = TextKlass.Root.o.defaultVariants.color;
  export let size: TextProps["size"] | undefined = TextKlass.Root.o.defaultVariants.size;
  export let weight: TextProps["weight"] | undefined = TextKlass.Root.o.defaultVariants.weight;

  let _class: TextProps["class"] = undefined;
  export { _class as class };

  let className: string = undefined;
  $: className = TextKlass.Root({ inline, align, color, size, weight }, [_class]);
</script>

<div {...$$restProps} class={className}>
  <slot />
</div>
