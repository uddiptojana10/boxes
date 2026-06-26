import {
  Download,
  RotateCcw,
  Search,
  Undo2,
  Redo2,
  Upload,
} from "lucide-react";

import Button from "./Button";
import { useLayout } from "../context/LayoutContext";

type Props = {
  search: string;
  onSearch: (value: string) => void;

  onUndo: () => void;
  onRedo: () => void;
  onReset: () => void;
  onImport: () => void;
  onExport: () => void;
};

export default function Toolbar({
  search,
  onSearch,
  onUndo,
  onRedo,
  onReset,
  onImport,
  onExport,
}: Props) {
  const { canUndo, canRedo } = useLayout();

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-neutral-700 bg-neutral-900 p-4">

      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
        />

        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search player..."
          className="w-72 rounded-md border border-neutral-700 bg-neutral-800 py-2 pl-10 pr-3 outline-none focus:border-amber-400"
        />
      </div>

      <div className="flex gap-2">

        <Button
          disabled={!canUndo}
          onClick={onUndo}
        >
          <Undo2 size={16} />
        </Button>

        <Button
          disabled={!canRedo}
          onClick={onRedo}
        >
          <Redo2 size={16} />
        </Button>

        <Button onClick={onReset}>
          <RotateCcw size={16} />
        </Button>

        <Button onClick={onImport}>
          <Upload size={16} />
        </Button>

        <Button onClick={onExport}>
          <Download size={16} />
        </Button>

      </div>
    </div>
  );
}