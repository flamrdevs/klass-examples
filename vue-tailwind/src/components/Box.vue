<script lang="ts">
export type BoxProps = { class?: ClassValue } & BoxKlass.RootVariants;
</script>

<script setup lang="ts">
import { computed } from "vue";

import type { ClassValue } from "@klass/core";

import * as BoxKlass from "./Box.reklass";

const props = defineProps<{
  class?: BoxProps["class"];
  d?: BoxProps["d"];
  ps?: BoxProps["ps"];
  t?: BoxProps["t"];
  r?: BoxProps["r"];
  b?: BoxProps["b"];
  l?: BoxProps["l"];
  m?: BoxProps["m"];
  mx?: BoxProps["mx"];
  my?: BoxProps["my"];
  mt?: BoxProps["mt"];
  mr?: BoxProps["mr"];
  mb?: BoxProps["mb"];
  ml?: BoxProps["ml"];
  p?: BoxProps["p"];
  px?: BoxProps["px"];
  py?: BoxProps["py"];
  pt?: BoxProps["pt"];
  pr?: BoxProps["pr"];
  pb?: BoxProps["pb"];
  pl?: BoxProps["pl"];
}>();

const className = computed(() =>
  BoxKlass.Root(
    {
      d: props.d,
      ps: props.ps,
      t: props.t,
      r: props.r,
      b: props.b,
      l: props.l,
      m: props.m,
      mx: props.mx,
      my: props.my,
      mt: props.mt,
      mr: props.mr,
      mb: props.mb,
      ml: props.ml,
      p: props.p,
      px: props.px,
      py: props.py,
      pt: props.pt,
      pr: props.pr,
      pb: props.pb,
      pl: props.pl,
    },
    [props.class]
  )
);
</script>

<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>
