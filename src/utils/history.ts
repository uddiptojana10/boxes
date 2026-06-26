export function pushHistory<T>(
  history: T[],
  current: T
): T[] {
  return [...history, structuredClone(current)];
}

export function undoHistory<T>(
  history: T[],
  current: T
) {
  if (history.length === 0) {
    return null;
  }

  const previous = history[history.length - 1];

  return {
    previous,
    history: history.slice(0, -1),
    future: structuredClone(current),
  };
}

export function redoHistory<T>(
  future: T[],
  current: T
) {
  if (future.length === 0) {
    return null;
  }

  const next = future[0];

  return {
    next,
    history: structuredClone(current),
    future: future.slice(1),
  };
}