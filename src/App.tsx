import { useRef, useState } from "react";

import HiveMap from "./components/HiveMap";
import Toolbar from "./components/Toolbar";
import { useLayout } from "./context/LayoutContext";

import {
  exportLayout,
  importLayout,
} from "./utils/storage";

export default function App() {
  const [search, setSearch] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

const {
  occupants,
  undo,
  redo,
  reset,
  importOccupants,
} = useLayout();

  function handleExport() {
    exportLayout(occupants);
  }

  async function handleImport(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      const layout = await importLayout(file);

      importOccupants(layout);

      // we'll hook this into LayoutContext next
    } catch {
      alert("Invalid layout file.");
    }

    event.target.value = "";
  }

  return (
    <div className="app-container">
      <input
        ref={fileInputRef}
        hidden
        type="file"
        accept=".json"
        onChange={handleImport}
      />

      <header className="app-header">
        <div className="header-content">
          <div className="header-top">
            <h1 className="app-title">
              Alliance Hive Planner
            </h1>
          </div>

          <Toolbar
            search={search}
            onSearch={setSearch}
            onUndo={undo}
            onRedo={redo}
            onReset={reset}
            onExport={handleExport}
            onImport={() => fileInputRef.current?.click()}
          />
        </div>
      </header>

      <main className="app-main">
        <HiveMap search={search} />
      </main>
    </div>
  );
}
