import { CombatAchievementRewardTier, CombatAchievementTier } from './CombatAchievement';

/**
 * Reward tiers unlocked at cumulative Combat Achievement point thresholds.
 * Points can come from tasks of any tier, not just the matching one.
 *
 * Source: https://oldschool.runescape.wiki/w/Combat_Achievements
 */
export const COMBAT_ACHIEVEMENT_REWARD_TIERS: CombatAchievementRewardTier[] = [
  {
    pointsRequired: 41,
    rewards: [
      'An antique lamp worth 5,000 experience in any skill above 20',
      'A 5% increased chance to receive an easy clue scroll from all sources (excluding implings)',
      "Ghommal's hilt 1; Three daily teleports to the God Wars Dungeon entrance (by the large boulder)",
      'Like a boss slayer unlock will now allow players to have up to 40 boss kills (a +5 increase) when assigned a boss task',
      'Gain one additional Void Knight commendation point per game of Pest Control',
      "100% bonus Warrior guild tokens from the Warriors' Guild",
    ],
    tier: CombatAchievementTier.Easy,
  },
  {
    pointsRequired: 161,
    rewards: [
      'An antique lamp worth 10,000 experience in any skill above 30',
      'A 5% increased chance to receive a medium clue scroll from all sources (excluding implings)',
      "Ghommal's hilt 2; Five daily teleports to the God Wars Dungeon entrance (by the large boulder); While equipped, the Prayer drain effect at Barrows is nullified",
      'Like a boss slayer unlock will now allow players to have up to 45 boss kills (a +10 increase) when assigned a boss task',
      "200% bonus Warrior guild tokens from the Warriors' Guild",
      'Gain two additional Void Knight commendation points per game of Pest Control',
      'The dwarven multicannon can hold up to 35 steel cannonballs',
    ],
    tier: CombatAchievementTier.Medium,
  },
  {
    pointsRequired: 416,
    rewards: [
      'An antique lamp worth 15,000 experience in any skill above 40',
      'A 5% increased chance to receive a hard clue scroll from all sources (excluding implings)',
      "Ghommal's hilt 3; Unlimited teleports to the God Wars Dungeon entrance (by the large boulder)",
      'Like a boss slayer unlock will now allow players to have up to 50 boss kills (a +15 increase) when assigned a boss task',
      'God Wars Dungeon benefits:; God Wars Dungeon boss entrances now require 35 follower kill count to enter instead of 40; Ecumenical key drop rate is now increased from 1/60 to 1/55; Access to private instances for God Wars Dungeon boss rooms, costing 150,000 coins and follower kill count/ecumenical key',
      'The fee to rent a private instance to fight The Hueycoatl is reduced to 25,000 coins.',
      'The fee to rent a private instance to fight Sarachnis is reduced to 12,500 coins.',
      'The fee to rent a private instance to fight the Giant Mole is reduced to 12,500 coins.',
      'Ability to create a dragon hunter crossbow (b) by combining it with kbd heads',
      'The cost of imbuing items at the Nightmare Zone and Soul Wars minigames is halved. Given this, players should unimbue all of their Nightmare Zone items before claiming the rewards, as they can later re-imbue them for half the cost.',
      'Gain three additional Void Knight commendation point per game of Pest Control',
      'The dwarven multicannon can hold up to 45 steel cannonballs',
    ],
    tier: CombatAchievementTier.Hard,
  },
  {
    pointsRequired: 1064,
    rewards: [
      'An antique lamp worth 25,000 experience in any skill above 50',
      'A 5% increased chance to receive an elite clue scroll from all sources (excluding implings)',
      "Ghommal's hilt 4; Three daily teleports to Mor Ul Rek (within the inner city)",
      'Like a boss slayer unlock will now allow players to have up to 55 boss kills (a +20 increase) when assigned a boss task',
      'God Wars Dungeon benefits:; God Wars Dungeon boss entrances now require 30 follower kill count to enter instead of 35; Ecumenical key drop rate is now increased from 1/55 to 1/50; Coin cost for God Wars Dungeon private instances is reduced from 150,000 to 125,000 coins',
      "Ability to create a dragon hunter crossbow (t) by combining it with Vorkath's head",
      'Tztok slayer helmet cosmetic variant is unlocked, obtainable by speaking to either Ghommal or Laidee Gnonock',
      'Bracelets of slaughter and expeditious bracelets have a 10% chance to fully recharge instead of breaking',
      "Superior slayer monster spawn rate increased 33% from 1/200 to 1/150 (Note: despite the in-game statement that this is a 25% increase, it's actually a 33% increase)",
      'The dwarven multicannon can hold up to 60 steel cannonballs',
    ],
    tier: CombatAchievementTier.Elite,
  },
  {
    pointsRequired: 1904,
    rewards: [
      'An antique lamp worth 35,000 experience in any skill above 60',
      "Ghommal's hilt 5; Five daily teleports to Mor Ul Rek (within the inner city); Ability to create Ghommal's avernic defender 5 by combining it with an Avernic defender",
      "Ghommal's lucky penny; When equipped, offers a 5% chance to not use a charge when using items that consume charges (such as jewellery and weapons)",
      'Like a boss slayer unlock will now allow players to have up to 60 boss kills (a +25 increase) when assigned a boss task',
      'Slayer tasks to kill TzTok-Jad or TzKal-Zuk are increased to 2 kills per task',
      'God Wars Dungeon benefits:; God Wars Dungeon boss entrances now require 25 follower kill count to enter instead of 30; Ecumenical key drop rate is now increased from 1/50 to 1/45; Coin cost for God Wars Dungeon private instances is reduced from 125,000 to 100,000 coins',
      'Ghommal or Laidee Gnonock can make players a vampyric slayer helmet',
      'Summoned thralls last 100% longer than normal',
    ],
    tier: CombatAchievementTier.Master,
  },
  {
    pointsRequired: 2630,
    rewards: [
      'An antique lamp worth 50,000 experience in any skill above 70',
      "Ghommal's hilt 6; Unlimited daily teleports to Mor Ul Rek (within the inner city); Ability to create Ghommal's avernic defender 6 by combining a Ghommal's hilt 6 with an Avernic defender",
      'Like a boss slayer unlock will now allow players to have up to 65 boss kills (a +30 increase) when assigned a boss task',
      'Slayer tasks to kill TzTok-Jad or TzKal-Zuk are increased to 3 kills per task',
      'God Wars Dungeon benefits:; God Wars Dungeon boss entrances now require 15 follower kill count to enter instead of 25; Ecumenical key drop rate is now increased from 1/45 to 1/40; Coin cost for God Wars Dungeon private instances is reduced from 100,000 to 75,000 coins',
      'Laidee Gnonock can make players a Tzkal slayer helmet',
      'Ability to show the TzKal slayer helmet to TzHaar-Ket-Keh to gain on-task damage bonuses for TzHaar Fight Cave and Inferno, without any of the other on-task benefits such as slayer experience and increased pet chance.',
    ],
    tier: CombatAchievementTier.Grandmaster,
  },
];

export function getRewardTier(tier: CombatAchievementTier): CombatAchievementRewardTier | undefined {
  return COMBAT_ACHIEVEMENT_REWARD_TIERS.find(r => r.tier === tier);
}
