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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 text-white">
      <input
        ref={fileInputRef}
        hidden
        type="file"
        accept=".json"
        onChange={handleImport}
      />

      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-[1500px] p-6">
          <h1 className="mb-4 text-3xl font-bold text-amber-300">
            Alliance Hive Planner
          </h1>

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

      <main className="mx-auto max-w-[1700px] p-2 sm:p-4 md:p-6">
        <HiveMap search={search} />
      </main>
    </div>
  );
}