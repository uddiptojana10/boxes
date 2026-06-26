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
        className="modal-backdrop"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="modal-container">

        <div className="modal-header">
          <h2 className="modal-title">
            {title}
          </h2>
        </div>

        <div className="modal-body">
          {children}
        </div>
      </div>
    </>
  );
}
