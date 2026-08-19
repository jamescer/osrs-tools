/**
 * SlayerUnlock interface for configuration
 */
export interface SlayerUnlockConfig {
  name: string;
  cost: number;
  description: string;
  wikiUrl?: string;
}

export class SlayerUnlock {
  name: string;
  cost: number;
  description: string;
  wikiUrl?: string;

  // Overloaded constructor signatures
  constructor(config: SlayerUnlockConfig);
  constructor(name: string, cost: number, description: string);

  // Constructor implementation
  constructor(nameOrConfig: string | SlayerUnlockConfig, cost?: number, description?: string) {
    // Handle options object pattern (modern API)
    if (typeof nameOrConfig === 'object' && !Array.isArray(nameOrConfig)) {
      const config = nameOrConfig as SlayerUnlockConfig;
      this.name = config.name;
      this.cost = config.cost;
      this.description = config.description;
      this.wikiUrl = config.wikiUrl;
    } else {
      // Handle positional arguments pattern (legacy API)
      this.name = nameOrConfig as string;
      this.cost = cost || 0;
      this.description = description || '';
    }
  }

  /**
   * Get the name of the unlock
   */
  getName(): string {
    return this.name;
  }

  /**
   * Get the cost of the unlock
   */
  getCost(): number {
    return this.cost;
  }

  /**
   * Get the description of the unlock
   */
  getDescription(): string {
    return this.description;
  }
}

