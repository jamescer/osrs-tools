import { Item } from '../Item/Item';

// NpcProduct.ts
export interface NpcProductMaterial {
  item: any; // Reference to the item object or class
  quantity: number;
}

/**
 * Represents a product that an NPC can make for players.
 * @property {string} product - Name of the product (e.g., "Skeletal bottoms").
 * @property {boolean} members - Whether the product is members-only.
 * @property {string} [facility] - Facility required (if any).
 * @property {Object} [skills] - Skills required (e.g., { Crafting: 60 }).
 * @property {number} [xp] - XP awarded for making the product.
 * @property {Item[]} materials - Materials required.
 */
export class NpcProduct {
  product: string; // Name of the product (e.g., "Skeletal bottoms")
  members: boolean; // Whether the product is members-only
  facility?: string; // Facility required (if any)
  skills?: { [skill: string]: number }; // Skills required (e.g., { Crafting: 60 })
  xp?: number; // XP awarded for making the product
  materials: NpcProductMaterial[];

  constructor(
    product: string,
    members: boolean,
    materials: NpcProductMaterial[],
    facility?: string,
    skills?: { [skill: string]: number },
    xp?: number,
  ) {
    this.product = product;
    this.members = members;
    this.facility = facility;
    this.skills = skills;
    this.xp = xp;
    this.materials = materials;
  }
}
