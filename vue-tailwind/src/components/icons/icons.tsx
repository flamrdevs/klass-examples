import { computed } from "vue";
import type { FunctionalComponent, ReservedProps, SVGAttributes } from "vue";

import clsx from "clsx";

type SVGProps = Omit<SVGAttributes & ReservedProps, "width" | "height" | "className"> & { lucide: string; size?: number };
type IconProps = Omit<SVGProps, "lucide">;

const SVG: FunctionalComponent<SVGProps> = (props, context) => {
  const size = computed(() => props.size ?? 20);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.value}
      height={size.value}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={clsx(`lucide lucide-${props.lucide}`, props.class)}
      {...props}
    >
      {context.slots.default?.()}
    </svg>
  );
};

SVG.inheritAttrs = false;

export const IconMoon: FunctionalComponent<IconProps> = (props) => {
  return (
    <SVG {...props} lucide="moon">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </SVG>
  );
};

IconMoon.inheritAttrs = false;

export const IconSun: FunctionalComponent<IconProps> = (props) => {
  return (
    <SVG {...props} lucide="sun">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </SVG>
  );
};

IconSun.inheritAttrs = false;
