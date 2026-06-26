import { useState } from "react";

import { BOARD, slots } from "../data/slots";
import { useLayout } from "../context/LayoutContext";
import Tile from "./Tile";

type Props = {
  search: string;
};

export default function HiveMap({ search }: Props) {
  const { occupants } = useLayout();

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const query = search.trim().toLowerCase();

  return (
    <div
      className="hive-map-scroll"
      onClick={() => setOpenMenu(null)}
    >
      <div
        className="hive-map-board"
        style={{
          width: BOARD.width,
          height: BOARD.height,
        }}
      >
        {slots.map((slot) => {
          const name =
            slot.type === "player"
              ? occupants[slot.id] ?? ""
              : slot.name ?? "";

          const highlighted =
            slot.type === "player" &&
            query.length > 0 &&
            name.toLowerCase().includes(query);

          return (
            <Tile
              key={slot.id}
              tile={{
                ...slot,
                name,
              }}
              highlighted={highlighted}
              menuOpen={openMenu === slot.id}
              onOpenMenu={() => setOpenMenu(slot.id)}
              onCloseMenu={() => setOpenMenu(null)}
            />
          );
        })}
      </div>
    </div>
  );
}
