import { Pencil, Shuffle, Trash2 } from "lucide-react";
type Props = {
  name: string;
  onRename: () => void;
  onSwap: () => void;
  onRemove: () => void;
};

export default function ContextMenu({
  name,
  onRename,
  onSwap,
  onRemove,
}: Props) {
  return (
    <div className="context-menu">
      <div className="context-menu-header">
        {name || "Empty Slot"}
      </div>

      <button
        onClick={onRename}
        className="context-menu-item"
      >
        <Pencil size={16} />
        Rename
      </button>

      <button
        onClick={onSwap}
        className="context-menu-item"
      >
        <Shuffle size={16} />
        Swap
      </button>

      <button
        onClick={onRemove}
        className="context-menu-item context-menu-danger"
      >
        <Trash2 size={16} />
        Remove
      </button>
    </div>
  );
}
