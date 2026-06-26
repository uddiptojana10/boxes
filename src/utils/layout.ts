export type Occupants = Record<string, string>;

export function renamePlayer(
  occupants: Occupants,
  slotId: string,
  name: string
): Occupants {
  return {
    ...occupants,
    [slotId]: name,
  };
}

export function removePlayer(
  occupants: Occupants,
  slotId: string
): Occupants {
  const next = { ...occupants };

  delete next[slotId];

  return next;
}

export function addPlayer(
  occupants: Occupants,
  slotId: string,
  name: string
): Occupants {
  return {
    ...occupants,
    [slotId]: name,
  };
}

export function swapPlayers(
  occupants: Occupants,
  first: string,
  second: string
): Occupants {
  const next = { ...occupants };

  const a = next[first];
  const b = next[second];

  if (b) next[first] = b;
  else delete next[first];

  if (a) next[second] = a;
  else delete next[second];

  return next;
}