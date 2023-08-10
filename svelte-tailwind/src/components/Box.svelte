<script lang="ts" context="module">
  export type BoxProps = { class?: ClassValue } & BoxKlass.RootVariants;
</script>

<script lang="ts">
  import type { ClassValue } from "@klass/core";

  import * as BoxKlass from "./Box.reklass";

  export let d: BoxProps["d"] | undefined = undefined;
  export let ps: BoxProps["ps"] | undefined = undefined;
  export let t: BoxProps["t"] | undefined = undefined;
  export let r: BoxProps["r"] | undefined = undefined;
  export let b: BoxProps["b"] | undefined = undefined;
  export let l: BoxProps["l"] | undefined = undefined;
  export let m: BoxProps["m"] | undefined = undefined;
  export let mx: BoxProps["mx"] | undefined = undefined;
  export let my: BoxProps["my"] | undefined = undefined;
  export let mt: BoxProps["mt"] | undefined = undefined;
  export let mr: BoxProps["mr"] | undefined = undefined;
  export let mb: BoxProps["mb"] | undefined = undefined;
  export let ml: BoxProps["ml"] | undefined = undefined;
  export let p: BoxProps["p"] | undefined = undefined;
  export let px: BoxProps["px"] | undefined = undefined;
  export let py: BoxProps["py"] | undefined = undefined;
  export let pt: BoxProps["pt"] | undefined = undefined;
  export let pr: BoxProps["pr"] | undefined = undefined;
  export let pb: BoxProps["pb"] | undefined = undefined;
  export let pl: BoxProps["pl"] | undefined = undefined;

  let _class: BoxProps["class"] = undefined;
  export { _class as class };

  let className: string = undefined;
  $: className = BoxKlass.Root(
    {
      d,
      ps,
      t,
      r,
      b,
      l,
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
    },
    [_class]
  );
</script>

<div {...$$restProps} class={className}>
  <slot />
</div>
