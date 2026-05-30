const STORAGE_KEY = "discoveredPairs";

export type DiscoveredPairs = Record<string, string>;

export function getDiscoveredPairs(): DiscoveredPairs {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return {};
  }

  try {
    return JSON.parse(saved);
  } catch {
    return {};
  }
}

export function discoverPair(pairId: string) {
  const discovered = getDiscoveredPairs();

  if (!discovered[pairId]) {
    discovered[pairId] = new Date().toISOString().slice(0, 10);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(discovered));
  }
}