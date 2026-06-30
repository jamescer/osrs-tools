/**
 * A single node in a Pact tree (Path-of-Exile-style passive tree).
 * Allocating a pact grants its effects and makes any pact listed in
 * `connections` allocatable next, provided it's reached from another
 * already-allocated pact (or is itself a tree root).
 */
export interface Pact {
  id: string;
  name: string;
  description?: string;
  effects: string[];
  /** Points required to allocate this pact (usually 1, more for keystones) */
  cost: number;
  /** IDs of pacts this one is connected to — treat as undirected edges */
  connections: string[];
  /** Regular nodes vs. build-defining capstone nodes */
  type?: 'node' | 'keystone';
  /** Loose branch grouping, e.g. 'fury' | 'precision' | 'shadows' */
  path?: string;
  /** Whether this pact's effects are reduced/disabled in PvP */
  pvpLimited?: boolean;
  /** Optional coordinates for rendering the tree visually */
  position?: { x: number; y: number };
  image?: string;
}

/**
 * A full pact tree. `roots` are pact IDs allocatable with no
 * prerequisite connection — the entry points into the tree.
 */
export interface PactTree {
  id: string;
  name: string;
  description?: string;
  pacts: Pact[];
  roots: string[];
  /** Total points players can spend, even if more can be earned */
  maxPoints: number;
  /** How many times the tree can be reset over the league */
  maxResets?: number;
}

/**
 * A specific allocation within a PactTree — a shareable build.
 */
export interface PactBuild {
  treeId: string;
  name?: string;
  allocatedPactIds: string[];
}
