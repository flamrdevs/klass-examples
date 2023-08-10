<script lang="ts">
export type TextProps = { class?: ClassValue } & TextKlass.RootVariants;
</script>

<script setup lang="ts">
import { computed } from "vue";

import type { ClassValue } from "@klass/core";

import * as TextKlass from "./Text.klass";

const props = defineProps<{
  class?: TextProps["class"];
  inline?: TextProps["inline"];
  align?: TextProps["align"];
  color?: TextProps["color"];
  size?: TextProps["size"];
  weight?: TextProps["weight"];
}>();

const className = computed(() =>
  TextKlass.Root(
    {
      inline: props.inline,
      align: props.align,
      color: props.color,
      size: props.size,
      weight: props.weight,
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
