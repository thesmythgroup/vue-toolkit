const ids: Record<string, number> = {};

export function getUniqueId(prefix: string) {
  if (!ids[prefix]) {
    ids[prefix] = 0;
  }

  const id = ++ids[prefix];

  return `${prefix}${id}`;
}
