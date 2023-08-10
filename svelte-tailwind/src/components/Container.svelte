<script lang="ts" context="module">
  export type ContainerProps = { class?: ClassValue } & ContainerKlass.RootVariants;
</script>

<script lang="ts">
  import type { ClassValue } from "@klass/core";

  import * as ContainerKlass from "./Container.klass";

  export let center: ContainerProps["center"] | undefined = ContainerKlass.Root.o.defaultVariants.center;
  export let max: ContainerProps["max"] | undefined = ContainerKlass.Root.o.defaultVariants.max;

  let _class: ContainerProps["class"] = undefined;
  export { _class as class };

  let className: string = undefined;
  $: className = ContainerKlass.Root({ center, max }, [_class]);
</script>

<div {...$$restProps} class={className}>
  <slot />
</div>
