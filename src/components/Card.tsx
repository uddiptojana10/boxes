import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-xl border border-neutral-700 bg-neutral-900 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}