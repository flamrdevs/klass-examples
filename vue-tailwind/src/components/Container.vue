<script lang="ts">
export type ContainerProps = { class?: ClassValue } & ContainerKlass.RootVariants;
</script>

<script setup lang="ts">
import { computed } from "vue";

import type { ClassValue } from "@klass/core";

import * as ContainerKlass from "./Container.klass";

const props = defineProps<{
  class?: ContainerProps["class"];
  center?: ContainerProps["center"];
  max?: ContainerProps["max"];
}>();

const className = computed(() => ContainerKlass.Root({ center: props.center, max: props.max }, [props.class]));
</script>

<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>
