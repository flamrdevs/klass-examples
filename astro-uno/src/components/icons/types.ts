import type { HTMLAttributes } from "astro/types";

export type SVGProps = Omit<HTMLAttributes<"svg">, "width" | "height" | "className"> & { lucide: string; size?: number };
export type IconProps = Omit<SVGProps, "lucide">;
