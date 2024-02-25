import type { SetupContext } from "vue";

import type { NuxtLinkProps } from "#app";

const CustomNuxtLink = defineNuxtLink({});

const NuxtLinkJSX = defineComponent((props: NuxtLinkProps, context: SetupContext) => () => h(CustomNuxtLink, props, context.slots));

export default NuxtLinkJSX;
