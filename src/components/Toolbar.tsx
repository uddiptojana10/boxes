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
    <div className="toolbar">
      <div className="toolbar-search">
        <Search
          size={18}
          className="toolbar-search-icon"
        />

        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search player..."
          className="toolbar-input"
        />
      </div>

      <div className="toolbar-actions">

        <Button
          disabled={!canUndo}
          onClick={onUndo}
          title="Undo"
        >
          <Undo2 size={16} />
        </Button>

        <Button
          disabled={!canRedo}
          onClick={onRedo}
          title="Redo"
        >
          <Redo2 size={16} />
        </Button>

        <Button onClick={onReset} title="Reset">
          <RotateCcw size={16} />
        </Button>

        <Button onClick={onImport} title="Import">
          <Upload size={16} />
        </Button>

        <Button onClick={onExport} title="Export">
          <Download size={16} />
        </Button>

      </div>
    </div>
  );
}
