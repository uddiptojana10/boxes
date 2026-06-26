import type { ReactNode } from "react";

type Props = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({
  open,
  title,
  children,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-[420px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900 shadow-2xl">

        <div className="border-b border-neutral-700 bg-neutral-800 px-5 py-4">
          <h2 className="text-lg font-semibold text-white">
            {title}
          </h2>
        </div>

        <div className="p-5">
          {children}
        </div>
      </div>
    </>
  );
}