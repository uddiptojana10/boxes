import { Pencil, Shuffle, Trash2, X } from "lucide-react";

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
    <div className="absolute left-1/2 top-full z-50 mt-2 w-48 -translate-x-1/2 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900 shadow-2xl">
      <div className="border-b border-neutral-700 bg-neutral-800 px-3 py-2 text-center font-semibold">
        {name || "Empty Slot"}
      </div>

      <button
        onClick={onRename}
        className="flex w-full items-center gap-2 px-3 py-2 hover:bg-neutral-800"
      >
        <Pencil size={16} />
        Rename
      </button>

      <button
        onClick={onSwap}
        className="flex w-full items-center gap-2 px-3 py-2 hover:bg-neutral-800"
      >
        <Shuffle size={16} />
        Swap
      </button>

      <button
        onClick={onRemove}
        className="flex w-full items-center gap-2 px-3 py-2 text-red-400 hover:bg-neutral-800"
      >
        <Trash2 size={16} />
        Remove
      </button>
    </div>
  );
}