export type TileType =
  | "player"
  | "fort"
  | "gate"
  | "outpost"
  | "alliance";

export interface Tile {
  id: string;
  type: TileType;

  x: number;
  y: number;

  width: number;
  height: number;

  name?: string;
}

export interface CustomPlayer {
  id: string;
  name: string;

  x: number;
  y: number;
}

export interface LayoutState {
  players: Record<string, string>;
  customPlayers: CustomPlayer[];
}