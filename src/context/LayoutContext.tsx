import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { occupants as defaultOccupants } from "../data/occupants";
import { loadLayout, saveLayout } from "../utils/storage";

type Occupants = Record<string, string>;

type LayoutContextType = {
  occupants: Occupants;

  swapFrom: string | null;

  addPlayer: (slotId: string, name: string) => void;
  renamePlayer: (slotId: string, name: string) => void;
  removePlayer: (slotId: string) => void;

  beginSwap: (slotId: string) => void;
  completeSwap: (slotId: string) => void;

  undo: () => void;
  redo: () => void;
  reset: () => void;

  importOccupants: (layout: Occupants) => void;

  canUndo: boolean;
  canRedo: boolean;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [occupants, setOccupants] = useState<Occupants>(() =>
    loadLayout(defaultOccupants)
  );

  const [history, setHistory] = useState<Occupants[]>([]);
  const [future, setFuture] = useState<Occupants[]>([]);
  const [swapFrom, setSwapFrom] = useState<string | null>(null);

  useEffect(() => {
    saveLayout(occupants);
  }, [occupants]);

  function commit(next: Occupants) {
    setHistory((h) => [...h, occupants]);
    setFuture([]);
    setOccupants(next);
  }

  function importOccupants(layout: Occupants) {
    commit(layout);
  }

  function addPlayer(slotId: string, name: string) {
    commit({
      ...occupants,
      [slotId]: name,
    });
  }

  function renamePlayer(slotId: string, name: string) {
    commit({
      ...occupants,
      [slotId]: name,
    });
  }

  function removePlayer(slotId: string) {
    const next = { ...occupants };
    delete next[slotId];
    commit(next);
  }

  function beginSwap(slotId: string) {
    setSwapFrom(slotId);
  }

  function completeSwap(slotId: string) {
    if (!swapFrom || swapFrom === slotId) {
      setSwapFrom(null);
      return;
    }

    const next = { ...occupants };

    const first = next[swapFrom];
    const second = next[slotId];

    if (second) next[swapFrom] = second;
    else delete next[swapFrom];

    if (first) next[slotId] = first;
    else delete next[slotId];

    commit(next);
    setSwapFrom(null);
  }

  function undo() {
    if (!history.length) return;

    const previous = history[history.length - 1];

    setFuture((f) => [occupants, ...f]);
    setHistory((h) => h.slice(0, -1));
    setOccupants(previous);
  }

  function redo() {
    if (!future.length) return;

    const next = future[0];

    setHistory((h) => [...h, occupants]);
    setFuture((f) => f.slice(1));
    setOccupants(next);
  }

  function reset() {
    setHistory((h) => [...h, occupants]);
    setFuture([]);
    setOccupants({ ...defaultOccupants });
    setSwapFrom(null);
  }

  const value = useMemo(
    () => ({
      occupants,
      swapFrom,
      addPlayer,
      renamePlayer,
      removePlayer,
      beginSwap,
      completeSwap,
      undo,
      redo,
      reset,
      importOccupants,
      canUndo: history.length > 0,
      canRedo: future.length > 0,
    }),
    [occupants, swapFrom, history.length, future.length]
  );

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("useLayout must be used inside LayoutProvider");
  }

  return context;
}