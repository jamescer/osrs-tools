import { NpcDrop } from "../../../source/runescape/model/npc/NpcDrop";

/**
 * Comprehensive test suite for NpcDrop
 * Tests the basic NPC drop system with item, quantity, and rarity
 */
describe("NpcDrop - Drop representation", () => {
  describe("Constructor and basic properties", () => {
    it("should create a drop with fixed quantity", () => {
      const drop = new NpcDrop("Bones", 1, "Always");
      expect(drop.item).toBe("Bones");
      expect(drop.quantity).toBe(1);
      expect(drop.rarity).toBe("Always");
    });

    it("should create a drop with quantity range", () => {
      const drop = new NpcDrop("Grimy Ranarr Weed", [1, 3], "1/32");
      expect(drop.item).toBe("Grimy Ranarr Weed");
      expect(drop.quantity).toEqual([1, 3]);
      expect(drop.rarity).toBe("1/32");
    });

    it("should always parse rarity string", () => {
      const drop = new NpcDrop("Item", 1, "1/128");
      expect(drop.rarityFraction).toBeCloseTo(1 / 128);
    });
  });

  describe("Rarity parsing", () => {
    it('should parse "Always" as rarity 1 (100%)', () => {
      const drop = new NpcDrop("Item", 1, "Always");
      expect(drop.rarityFraction).toBe(1);
    });

    it('should parse case-insensitive "always"', () => {
      const drop = new NpcDrop("Item", 1, "always");
      expect(drop.rarityFraction).toBe(1);
    });

    it('should parse fraction "1/128"', () => {
      const drop = new NpcDrop("Item", 1, "1/128");
      expect(drop.rarityFraction).toBeCloseTo(1 / 128);
    });

    it('should parse fraction "1/512"', () => {
      const drop = new NpcDrop("Item", 1, "1/512");
      expect(drop.rarityFraction).toBeCloseTo(1 / 512);
    });

    it('should parse fraction "1/64"', () => {
      const drop = new NpcDrop("Item", 1, "1/64");
      expect(drop.rarityFraction).toBeCloseTo(1 / 64);
    });

    it('should parse complex fractions like "4/128"', () => {
      const drop = new NpcDrop("Item", 1, "4/128");
      expect(drop.rarityFraction).toBeCloseTo(4 / 128);
    });

    it("should return undefined for unparseable rarity", () => {
      const drop = new NpcDrop("Item", 1, "sometimes");
      expect(drop.rarityFraction).toBeUndefined();
    });
  });

  describe("Different item types", () => {
    it("should support simple item names", () => {
      const drop = new NpcDrop("Coins", 100, "Always");
      expect(drop.item).toBe("Coins");
    });

    it("should support item names with spaces", () => {
      const drop = new NpcDrop("Dragon Bones", 1, "1/128");
      expect(drop.item).toBe("Dragon Bones");
    });

    it("should support item names with special characters", () => {
      const drop = new NpcDrop("Abyssal whip (a)", 1, "1/512");
      expect(drop.item).toBe("Abyssal whip (a)");
    });
  });

  describe("Different quantity formats", () => {
    it("should accept fixed quantity 0", () => {
      const drop = new NpcDrop("Item", 0, "1/128");
      expect(drop.quantity).toBe(0);
    });

    it("should accept fixed quantity 1", () => {
      const drop = new NpcDrop("Item", 1, "1/128");
      expect(drop.quantity).toBe(1);
    });

    it("should accept large quantity numbers", () => {
      const drop = new NpcDrop("Coins", 1000000, "Always");
      expect(drop.quantity).toBe(1000000);
    });

    it("should accept range with equal min and max", () => {
      const drop = new NpcDrop("Item", [5, 5], "Always");
      expect(drop.quantity).toEqual([5, 5]);
    });

    it("should accept range with min < max", () => {
      const drop = new NpcDrop("Herb", [1, 5], "1/32");
      expect(drop.quantity).toEqual([1, 5]);
    });

    it("should accept range with large numbers", () => {
      const drop = new NpcDrop("Coins", [100, 10000], "Always");
      expect(drop.quantity).toEqual([100, 10000]);
    });
  });

  describe("Real OSRS drop examples", () => {
    it("should create Zulrah scale drop", () => {
      const drop = new NpcDrop("Zulrah's Scales", [20, 40], "Always");
      expect(drop.item).toBe("Zulrah's Scales");
      expect(drop.quantity).toEqual([20, 40]);
      expect(drop.rarityFraction).toBe(1);
    });

    it("should create Abyssal Whip drop", () => {
      const drop = new NpcDrop("Abyssal Whip", 1, "1/512");
      expect(drop.item).toBe("Abyssal Whip");
      expect(drop.quantity).toBe(1);
      expect(drop.rarityFraction).toBeCloseTo(1 / 512);
    });

    it("should create Dragon Bones drop", () => {
      const drop = new NpcDrop("Dragon Bones", 1, "Always");
      expect(drop.item).toBe("Dragon Bones");
      expect(drop.quantity).toBe(1);
      expect(drop.rarityFraction).toBe(1);
    });

    it("should create Clue Scroll drop", () => {
      const drop = new NpcDrop("Clue Scroll (Hard)", 1, "1/256");
      expect(drop.item).toBe("Clue Scroll (Hard)");
      expect(drop.quantity).toBe(1);
      expect(drop.rarityFraction).toBeCloseTo(1 / 256);
    });
  });

  describe("Edge cases", () => {
    it("should handle empty item string", () => {
      const drop = new NpcDrop("", 1, "Always");
      expect(drop.item).toBe("");
    });

    it("should handle decimal quantities in range", () => {
      const drop = new NpcDrop("Item", [1.5, 2.5], "Always");
      expect(drop.quantity).toEqual([1.5, 2.5]);
    });

    it("should allow very rare drops", () => {
      const drop = new NpcDrop("Item", 1, "1/32000");
      expect(drop.rarityFraction).toBeCloseTo(1 / 32000);
    });

    it("should create multiple drops with same properties", () => {
      const drop1 = new NpcDrop("Item", 1, "Always");
      const drop2 = new NpcDrop("Item", 1, "Always");
      expect(drop1.rarityFraction).toBe(drop2.rarityFraction);
      expect(drop1.item).toBe(drop2.item);
    });
  });
});
