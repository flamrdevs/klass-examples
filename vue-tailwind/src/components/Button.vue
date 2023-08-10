<script lang="ts">
export type ButtonProps = { class?: ClassValue } & ButtonKlass.RootVariants;
</script>

<script setup lang="ts">
import { computed } from "vue";

import type { ClassValue } from "@klass/core";

import * as ButtonKlass from "./Button.klass";

const props = defineProps<{
  class?: ButtonProps["class"];
  color?: ButtonProps["color"];
  size?: ButtonProps["size"];
}>();

const className = computed(() => ButtonKlass.Root({ color: props.color, size: props.size }, [props.class]));
</script>

<template>
  <button type="button" :class="className">
    <slot></slot>
  </button>
</template>
