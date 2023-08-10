<script lang="ts">
export type IconButtonProps = { class?: ClassValue } & IconButtonKlass.RootVariants;
</script>

<script setup lang="ts">
import { computed } from "vue";

import type { ClassValue } from "@klass/core";

import * as IconButtonKlass from "./IconButton.klass";

const props = defineProps<{
  class?: IconButtonProps["class"];
  color?: IconButtonProps["color"];
  size?: IconButtonProps["size"];
}>();

const className = computed(() => IconButtonKlass.Root({ color: props.color, size: props.size }, [props.class]));
</script>

<template>
  <button type="button" :class="className">
    <slot></slot>
  </button>
</template>
