import { component$, Slot } from "@builder.io/qwik";

import type { ClassValue } from "@klass/core";

import * as BoxKlass from "./Box.reklass";

type BoxProps = { class?: ClassValue } & BoxKlass.RootVariants;

const Box = component$<BoxProps>(
  ({ d, ps, t, r, b, l, m, mx, my, mt, mr, mb, ml, p, px, py, pt, pr, pb, pl, class: className, ...props }) => {
    return (
      <div
        {...props}
        class={BoxKlass.Root(
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
          [className]
        )}
      >
        <Slot />
      </div>
    );
  }
);

export type { BoxProps };
export default Box;
