import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function Button({
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        `
        flex
        items-center
        justify-center
        gap-2

        rounded-xl
        border
        border-white/10

        bg-gradient-to-b
        from-neutral-800
        to-neutral-900

        px-4
        py-2.5

        text-sm
        font-semibold
        text-neutral-100

        shadow-lg
        shadow-black/20

        transition-all
        duration-200

        hover:-translate-y-0.5
        hover:border-amber-400/60
        hover:from-neutral-700
        hover:to-neutral-800
        hover:shadow-xl
        hover:shadow-amber-500/10

        active:translate-y-0
        active:scale-[0.98]

        disabled:cursor-not-allowed
        disabled:opacity-40
        disabled:hover:translate-y-0
        disabled:hover:border-white/10
        `,
        className
      )}
    >
      {children}
    </button>
  );
}