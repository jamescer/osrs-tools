/**
 * Example usage of ClueScrollHelper
 * This demonstrates how to use the clue scroll simulation functionality
 */

import { ClueScrollHelper } from '../runescape/model/clue/ClueScrollHelper';

// Example 1: Open a single beginner clue casket (returns 1-3 items)
const beginnerCasket = ClueScrollHelper.openCasket('beginner');
console.log(`Beginner clue casket with ${beginnerCasket.count} rewards:`, beginnerCasket.items);

// Example 2: Open an easy clue casket
const easyCasket = ClueScrollHelper.openCasket('easy');
console.log(`Easy clue casket with ${easyCasket.count} rewards:`, easyCasket.items);

// Example 3: Simulate opening 10 caskets (accumulates all items)
const allRewards = ClueScrollHelper.simulateMultiple('beginner', 10);
console.log(`10 beginner clue caskets produced ${allRewards.length} total items:`, allRewards);

// Example 4: Get probability of a specific item
const flaredTrousersOdds = ClueScrollHelper.getItemProbability('easy', 'Flared trousers');
console.log(`Probability of Flared trousers per roll: ${flaredTrousersOdds.toFixed(4)} (1/${(1/flaredTrousersOdds).toFixed(0)})`);

// Example 5: Get rarity as 1/X
const rarity = ClueScrollHelper.getItemRarity('easy', 'Willow comp bow');
console.log(`Willow comp bow rarity: 1/${Math.round(rarity)}`);

// Example 6: Get all possible rewards for a tier
const possibleRewards = ClueScrollHelper.getPossibleRewards('easy');
console.log(`Total possible easy clue rewards: ${possibleRewards.length}`);

// Example 7: Try all difficulty tiers (shows multi-reward mechanic)
const tiers = ['beginner', 'easy', 'medium', 'hard', 'elite', 'master'] as const;
tiers.forEach(tier => {
  const casket = ClueScrollHelper.openCasket(tier);
  const itemNames = casket.items.map(item => item.name).join(', ');
  console.log(`${tier.charAt(0).toUpperCase() + tier.slice(1)} casket (${casket.count} items): ${itemNames}`);
});
