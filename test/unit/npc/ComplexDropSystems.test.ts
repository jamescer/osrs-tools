import {
  WeightedDrop,
  WeightedDropTable,
  DropRoll,
  CompleteDropTable,
  SharedRareDropTable,
  createWomanDropTable,
  createZulrahDropTable,
  createSharedGWDRareTable,
  createGeneralGraardorDropTable,
} from "../../../source/runescape/model/npc/ComplexDropSystems";
import { NpcDrop } from "../../../source/runescape/model/npc/NpcDrop";

/**
 * Comprehensive test suite for complex drop systems
 * Tests weighted drops, drop rolls, and multi-roll tables
 */
describe("Complex NPC Drop Systems", () => {
  describe("WeightedDrop - Item with weight for weighted selection", () => {
    it("should store drop and weight correctly", () => {
      const drop = new NpcDrop("Rare Loot", 1, "1/128");
      const weighted = new WeightedDrop(drop, 50);

      expect(weighted.drop).toBe(drop);
      expect(weighted.weight).toBe(50);
    });

    it("should calculate probability in table", () => {
      const drop = new NpcDrop("Item", 1, "Always");
      const weighted = new WeightedDrop(drop, 30);

      const probability = weighted.getProbabilityInTable(100);
      expect(probability).toBe(0.3);
    });

    it("should throw error if weight is zero or negative", () => {
      const drop = new NpcDrop("Item", 1, "Always");
      expect(() => new WeightedDrop(drop, 0)).toThrow();
      expect(() => new WeightedDrop(drop, -10)).toThrow();
    });

    it("should accept decimal weights", () => {
      const drop = new NpcDrop("Item", 1, "Always");
      const weighted = new WeightedDrop(drop, 0.5);
      expect(weighted.weight).toBe(0.5);
    });
  });

  describe("WeightedDropTable - Select one item from weighted options", () => {
    let table: WeightedDropTable;

    beforeEach(() => {
      table = new WeightedDropTable();
    });

    it("should add drops with weights", () => {
      const drop1 = new NpcDrop("Item1", 1, "Always");
      const drop2 = new NpcDrop("Item2", 1, "Always");

      table.addDrop(drop1, 30);
      table.addDrop(drop2, 70);

      const drops = table.getDrops();
      expect(drops.length).toBe(2);
      expect(drops[0].drop).toBe(drop1);
      expect(drops[0].weight).toBe(30);
      expect(drops[1].drop).toBe(drop2);
      expect(drops[1].weight).toBe(70);
    });

    it("should calculate drop probabilities correctly", () => {
      table.addDrop(new NpcDrop("Item1", 1, "Always"), 20);
      table.addDrop(new NpcDrop("Item2", 1, "Always"), 30);
      table.addDrop(new NpcDrop("Item3", 1, "Always"), 50);

      const probs = table.getDropProbabilities();
      const drops = Array.from(probs.keys());

      expect(drops.length).toBe(3);
      expect(probs.get(drops[0])).toBe(0.2);
      expect(probs.get(drops[1])).toBe(0.3);
      expect(probs.get(drops[2])).toBe(0.5);
    });

    it("should handle many drops", () => {
      for (let i = 0; i < 50; i++) {
        table.addDrop(new NpcDrop(`Item${i}`, 1, "Always"), 1);
      }
      expect(table.getDrops().length).toBe(50);
    });

    it("should sort drops by weight", () => {
      table.addDrop(new NpcDrop("Rare", 1, "Always"), 10);
      table.addDrop(new NpcDrop("Common", 1, "Always"), 50);
      table.addDrop(new NpcDrop("Uncommon", 1, "Always"), 30);

      table.sortByWeight(true);

      const drops = table.getDrops();
      expect(drops[0].weight).toBe(50);
      expect(drops[1].weight).toBe(30);
      expect(drops[2].weight).toBe(10);
    });

    it("should find most likely drop", () => {
      table.addDrop(new NpcDrop("Common", 1, "Always"), 40);
      table.addDrop(new NpcDrop("Rare", 1, "Always"), 30);

      const mostLikely = table.getMostLikelyDrop();
      expect(mostLikely?.drop.item).toBe("Common");
    });
  });

  describe("DropRoll - Single roll in multi-roll table", () => {
    it("should store roll properties", () => {
      const drops = [new NpcDrop("Coins", 100, "Always"), new NpcDrop("Bones", 1, "Always")];
      const roll = new DropRoll("Primary", drops, "Always");

      expect(roll.name).toBe("Primary");
      expect(roll.chanceString).toBe("Always");
      expect(roll.isGuaranteed).toBe(true);
    });

    it("should identify weighted drops", () => {
      const table = new WeightedDropTable();
      table.addDrop(new NpcDrop("Item1", 1, "Always"), 50);
      table.addDrop(new NpcDrop("Item2", 1, "Always"), 50);

      const roll = new DropRoll("Rare", table, "1/128");

      expect(roll.isWeighted).toBe(true);
    });

    it("should find drops by item name", () => {
      const drop1 = new NpcDrop("Sword", 1, "Always");
      const drop2 = new NpcDrop("Shield", 1, "Always");
      const drops = [drop1, drop2];
      const roll = new DropRoll("Unique", drops, "Always");

      expect(roll.getDrop("Sword")).toBe(drop1);
      expect(roll.getDrop("Shield")).toBe(drop2);
      expect(roll.getDrop("NonExistent")).toBeUndefined();
    });

    it("should parse chance string correctly", () => {
      const dropList = [new NpcDrop("Item", 1, "Always")];
      const roll = new DropRoll("Rare", dropList, "1/128");

      expect(roll.isGuaranteed).toBe(false);
    });
  });

  describe("CompleteDropTable - Multi-roll drop table", () => {
    let table: CompleteDropTable;

    beforeEach(() => {
      table = new CompleteDropTable("Test NPC");
    });

    it("should add simple rolls with guaranteed drops", () => {
      const drops = [new NpcDrop("Bones", 1, "Always"), new NpcDrop("Coins", 100, "Always")];
      table.addSimpleRoll("Standard", drops);

      expect(table.getRolls().length).toBe(1);
      expect(table.getRolls()[0].name).toBe("Standard");
    });

    it("should add weighted rolls with chance", () => {
      const weighted = new WeightedDropTable();
      weighted.addDrop(new NpcDrop("Rare1", 1, "Always"), 50);
      weighted.addDrop(new NpcDrop("Rare2", 1, "Always"), 50);

      table.addWeightedRoll("Rare", weighted, "1/512");

      expect(table.getRolls().length).toBe(1);
      expect(table.getRolls()[0].isWeighted).toBe(true);
    });

    it("should get all possible drops flattened", () => {
      table.addSimpleRoll("Primary", [new NpcDrop("Item1", 1, "Always"), new NpcDrop("Item2", 1, "Always")]);
      table.addSimpleRoll("Secondary", [new NpcDrop("Item3", 1, "Always")]);

      const all = table.getAllPossibleDrops();
      expect(all.length).toBe(3);
      expect(all.map((d) => d.item)).toContain("Item1");
      expect(all.map((d) => d.item)).toContain("Item2");
      expect(all.map((d) => d.item)).toContain("Item3");
    });

    it("should find drops by item name", () => {
      table.addSimpleRoll("Standard", [new NpcDrop("Sword", 1, "Always"), new NpcDrop("Shield", 1, "Always")]);

      expect(table.findDrop("Sword")).toBeDefined();
      expect(table.findDrop("Nonexistent")).toBeUndefined();
    });

    it("should estimate average drops per kill", () => {
      table.addSimpleRoll("Always", [new NpcDrop("Bones", 1, "Always")]);
      const avg = table.estimateAverageDrops();
      expect(avg).toBeCloseTo(1);
    });

    it("should provide string representation", () => {
      table.addSimpleRoll("Standard", [new NpcDrop("Item", 1, "Always")]);
      const str = table.toString();
      expect(str).toContain("Test NPC");
      expect(str).toContain("Standard");
    });
  });

  describe("SharedRareDropTable - Shared rare drops across NPCs", () => {
    let shared: SharedRareDropTable;

    beforeEach(() => {
      shared = new SharedRareDropTable();
    });

    it("should add weighted tables by tier", () => {
      const tier1 = new WeightedDropTable();
      tier1.addDrop(new NpcDrop("VeryRare1", 1, "Always"), 50);

      shared.addTier(1, tier1);

      expect(shared.getTier(1)).toBe(tier1);
    });

    it("should get all tiers sorted", () => {
      const tier1 = new WeightedDropTable();
      const tier3 = new WeightedDropTable();
      const tier2 = new WeightedDropTable();

      shared.addTier(3, tier3);
      shared.addTier(1, tier1);
      shared.addTier(2, tier2);

      const tiers = shared.getAllTiers();
      expect(tiers).toEqual([1, 2, 3]);
    });

    it("should return undefined for non-existent tier", () => {
      expect(shared.getTier(999)).toBeUndefined();
    });

    it("should provide string representation", () => {
      const tier1 = new WeightedDropTable();
      shared.addTier(1, tier1);
      shared.addTier(2, new WeightedDropTable());

      expect(shared.toString()).toContain("SharedRareDropTable");
      expect(shared.toString()).toContain("2 tiers");
    });
  });

  describe("Factory functions - Create realistic drop tables", () => {
    describe("createWomanDropTable", () => {
      it("should create Woman NPC with Bones drop", () => {
        const woman = createWomanDropTable();
        const drops = woman.getAllPossibleDrops();

        expect(drops.length).toBeGreaterThan(0);
        expect(drops.some((d) => d.item === "Bones")).toBe(true);
      });

      it("should have Bones as guaranteed drop", () => {
        const woman = createWomanDropTable();
        const bones = woman.getAllPossibleDrops().find((d) => d.item === "Bones");

        expect(bones).toBeDefined();
        expect(bones?.rarityFraction).toBe(1);
      });
    });

    describe("createZulrahDropTable", () => {
      it("should create Zulrah with multiple rolls", () => {
        const zulrah = createZulrahDropTable();
        expect(zulrah.getRolls().length).toBeGreaterThanOrEqual(2);
      });

      it("should have primary and secondary rolls", () => {
        const zulrah = createZulrahDropTable();
        const rolls = zulrah.getRolls();
        const rollNames = rolls.map((r) => r.name);

        expect(rollNames).toContain("Primary");
        expect(rollNames).toContain("Secondary");
      });

      it("should include rare drops", () => {
        const zulrah = createZulrahDropTable();
        const allDrops = zulrah.getAllPossibleDrops();

        expect(allDrops.length).toBeGreaterThan(2);
      });
    });

    describe("createSharedGWDRareTable", () => {
      it("should create shared table with multiple tiers", () => {
        const shared = createSharedGWDRareTable();
        expect(shared.getAllTiers().length).toBeGreaterThan(0);
      });

      it("should have tier 1 (very rare)", () => {
        const shared = createSharedGWDRareTable();
        expect(shared.getTier(1)).toBeDefined();
      });

      it("should have tier 2 (rare)", () => {
        const shared = createSharedGWDRareTable();
        expect(shared.getTier(2)).toBeDefined();
      });
    });

    describe("createGeneralGraardorDropTable", () => {
      it("should create General Graardor with standard drops", () => {
        const shared = createSharedGWDRareTable();
        const graardor = createGeneralGraardorDropTable(shared);

        const rolls = graardor.getRolls();
        expect(rolls.length).toBeGreaterThan(0);
      });

      it("should use shared rare table", () => {
        const shared = createSharedGWDRareTable();
        const graardor = createGeneralGraardorDropTable(shared);

        const allDrops = graardor.getAllPossibleDrops();
        expect(allDrops.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Integration - Realistic NPC drop scenarios", () => {
    it("should handle simple NPC (Woman) with single guaranteed drop", () => {
      const woman = createWomanDropTable();
      expect(woman.toString()).toContain("Woman");
      expect(woman.estimateAverageDrops()).toBeCloseTo(1);
    });

    it("should handle complex boss (Zulrah) with multiple rolls", () => {
      const zulrah = createZulrahDropTable();
      expect(zulrah.toString()).toContain("Zulrah");

      const avgDrops = zulrah.estimateAverageDrops();
      expect(avgDrops).toBeGreaterThan(1);
    });

    it("should handle General Graardor with shared rare table", () => {
      const shared = createSharedGWDRareTable();
      const graardor = createGeneralGraardorDropTable(shared);

      expect(graardor.getRolls().length).toBeGreaterThan(0);

      const allDrops = graardor.getAllPossibleDrops();
      expect(allDrops.length).toBeGreaterThan(0);
    });
  });

  // ====================================================================
  // SharedRareDropTable Tests
  // ====================================================================

  describe("SharedRareDropTable - Reusable rare tables", () => {
    let shared: SharedRareDropTable;

    beforeEach(() => {
      shared = new SharedRareDropTable();
    });

    describe("when adding tiers", () => {
      it("should add weighted table for tier", () => {
        const table = new WeightedDropTable();
        table.addDrop(new NpcDrop("Item", 1, "Always"), 1);

        shared.addTier(1, table);

        expect(shared.getTier(1)).toBe(table);
      });

      it("should support multiple tiers", () => {
        const tier1 = new WeightedDropTable();
        const tier2 = new WeightedDropTable();

        shared.addTier(1, tier1);
        shared.addTier(2, tier2);

        expect(shared.getAllTiers()).toContain(1);
        expect(shared.getAllTiers()).toContain(2);
        expect(shared.getAllTiers().length).toBe(2);
      });
    });

    describe("when retrieving tiers", () => {
      it("should return tier if exists", () => {
        const table = new WeightedDropTable();
        shared.addTier(1, table);

        expect(shared.getTier(1)).toBe(table);
      });

      it("should return undefined for non-existent tier", () => {
        expect(shared.getTier(999)).toBeUndefined();
      });

      it("should return sorted tier numbers", () => {
        shared.addTier(3, new WeightedDropTable());
        shared.addTier(1, new WeightedDropTable());
        shared.addTier(2, new WeightedDropTable());

        const tiers = shared.getAllTiers();
        expect(tiers).toEqual([1, 2, 3]);
      });
    });

    describe("when using in multiple NPCs", () => {
      it("should allow same table in multiple bosses", () => {
        const rareTable = new WeightedDropTable();
        rareTable.addDrop(new NpcDrop("Unique", 1, "Always"), 1);

        shared.addTier(1, rareTable);

        // Both bosses can use the same table
        const boss1 = shared.getTier(1);
        const boss2 = shared.getTier(1);

        expect(boss1).toBe(boss2); // Same reference (no duplication)
      });
    });

    describe("when displaying info", () => {
      it("should have readable string representation", () => {
        shared.addTier(1, new WeightedDropTable());

        const str = shared.toString();
        expect(str).toContain("SharedRareDropTable");
      });
    });
  });


  // ====================================================================
  // Error Handling and Edge Cases
  // ====================================================================

  describe("Error handling and edge cases", () => {
    it("should handle empty weighted drop table gracefully", () => {
      const table = new WeightedDropTable();
      expect(table.getDrops().length).toBe(0);
      expect(table.getMostLikelyDrop()).toBeUndefined();
    });

    it("should handle empty complete drop table gracefully", () => {
      const table = new CompleteDropTable("Empty");
      expect(table.getRolls().length).toBe(0);
      expect(table.getAllPossibleDrops().length).toBe(0);
    });

    it("should calculate average drops for empty table", () => {
      const table = new CompleteDropTable("Empty");
      const average = table.estimateAverageDrops();
      expect(average).toBe(0);
    });

    it("should handle very large weights", () => {
      const table = new WeightedDropTable();
      table.addDrop(new NpcDrop("Item", 1, "Always"), 1000000);
      const probs = table.getDropProbabilities();

      expect(probs.size).toBe(1);
      expect(Array.from(probs.values())[0]).toBe(1);
    });

    it("should maintain precision with small probabilities", () => {
      const table = new CompleteDropTable("Small Probs");
      // Roll with very small probability and small quantity
      table.addSimpleRoll("Rare", [new NpcDrop("Item", 1, "1/512")]);

      const average = table.estimateAverageDrops();
      // Uses min quantity of 1, so average is 1
      // (estimateAverageDrops doesn't factor in drop chance for this method,
      // it just uses min quantities)
      expect(average).toBe(1);
    });
  });
});
