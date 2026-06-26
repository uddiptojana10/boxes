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
      ? "tile-player"
      : tile.type === "fort"
      ? "tile-fort"
      : tile.type === "gate"
      ? "tile-gate"
      : tile.type === "outpost"
      ? "tile-outpost"
      : "tile-alliance";

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
          className={`tile-button ${style} ${ring}`}
        >
          <div className="tile-content">
            {tile.type === "player" && (
              <>
                <div className="tile-emoji">🏰</div>
                <div className="tile-name">
                  {tile.name}
                </div>
              </>
            )}

            {tile.type === "fort" && (
              <>
                <div className="tile-emoji-large">🏯</div>
                <div className="tile-label">Fort</div>
              </>
            )}

            {tile.type === "gate" && (
              <>
                <div className="tile-emoji-large">🚪</div>
                <div className="tile-label">Gate</div>
              </>
            )}

            {tile.type === "outpost" && (
              <div className="tile-emoji-large">🗼</div>
            )}

            {tile.type === "alliance" && (
              <div className="tile-emoji-large">🏛️</div>
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
