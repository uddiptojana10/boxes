import { useState } from "react";
import type { Tile as TileType } from "../types";

import { useLayout } from "../context/LayoutContext";
import ContextMenu from "./ContextMenu";
import RenamePlayerModal from "./RenamePlayerModal";

type Props = {
  tile: TileType;
  highlighted: boolean;

  menuOpen: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
};

export default function Tile({
  tile,
  highlighted,
  menuOpen,
  onOpenMenu,
  onCloseMenu,
}: Props) {
  const [renameOpen, setRenameOpen] = useState(false);

  const {
    swapFrom,
    beginSwap,
    completeSwap,
    renamePlayer,
    removePlayer,
  } = useLayout();

  const isPlayer = tile.type === "player";

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();

    if (!isPlayer) return;

    if (swapFrom) {
      completeSwap(tile.id);
      return;
    }

    if (menuOpen) {
      onCloseMenu();
    } else {
      onOpenMenu();
    }
  }

  function handleRename() {
    onCloseMenu();
    setRenameOpen(true);
  }

  function handleSave(name: string) {
    renamePlayer(tile.id, name);
    setRenameOpen(false);
  }

  function handleRemove() {
    removePlayer(tile.id);
    onCloseMenu();
  }

  function handleSwap() {
    beginSwap(tile.id);
    onCloseMenu();
  }

  const ring =
    swapFrom === tile.id
      ? "ring-4 ring-yellow-400"
      : highlighted
      ? "ring-4 ring-cyan-400"
      : "";

  const style =
    tile.type === "player"
      ? "border-zinc-600 bg-gradient-to-b from-zinc-700 to-zinc-900 hover:border-amber-400"
      : tile.type === "fort"
      ? "border-red-400 bg-gradient-to-b from-red-700 to-red-900"
      : tile.type === "gate"
      ? "border-blue-400 bg-gradient-to-b from-blue-700 to-blue-900"
      : tile.type === "outpost"
      ? "border-orange-400 bg-gradient-to-b from-orange-600 to-orange-800"
      : "border-green-400 bg-gradient-to-b from-green-700 to-green-900";

  return (
    <>
      <div
        className="absolute"
        style={{
          left: tile.x,
          top: tile.y,
          width: tile.width,
          height: tile.height,
        }}
      >
        <button
          type="button"
          disabled={!isPlayer}
          onClick={handleClick}
          className={`h-full w-full rounded-xl border-2 shadow-xl transition hover:scale-105 ${style} ${ring}`}
        >
          <div className="flex h-full flex-col items-center justify-center">
            {tile.type === "player" && (
              <>
                <div className="text-lg">🏰</div>
                <div className="px-1 text-center text-[11px] font-semibold leading-tight">
                  {tile.name}
                </div>
              </>
            )}

            {tile.type === "fort" && (
              <>
                <div className="text-3xl">🏯</div>
                <div className="text-xs font-bold">Fort</div>
              </>
            )}

            {tile.type === "gate" && (
              <>
                <div className="text-3xl">🚪</div>
                <div className="text-xs font-bold">Gate</div>
              </>
            )}

            {tile.type === "outpost" && (
              <div className="text-3xl">🗼</div>
            )}

            {tile.type === "alliance" && (
              <div className="text-3xl">🏛️</div>
            )}
          </div>
        </button>

        {menuOpen && (
          <div onClick={(e) => e.stopPropagation()}>
            <ContextMenu
              name={tile.name ?? ""}
              onRename={handleRename}
              onSwap={handleSwap}
              onRemove={handleRemove}
            />
          </div>
        )}
      </div>

      <RenamePlayerModal
        open={renameOpen}
        initialName={tile.name ?? ""}
        onSave={handleSave}
        onClose={() => setRenameOpen(false)}
      />
    </>
  );
}