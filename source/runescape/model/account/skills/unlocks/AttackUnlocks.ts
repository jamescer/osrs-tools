/**
 * 1		Bronze	None.[1]
1		Iron	None.[1]
1		Machetes	None.
5		Steel	None.[1]
10		Black	None.[1]
10		White	Completion of the Wanted! quest.
15		Ancient mace	Prayer 25 and partial completion of Another Slice of H.A.M.
20		Mithril	None.[1]
30		Adamant	None.[1]
30		Battlestaves	Magic 30
30		Swamp lizard	Ranged 30 Magic 30
40		Brine sabre	None.
40		Mystic staves	Magic 40
40		Rune	None.[1]
42		Void knight mace	Attack 42,Strength,Defence,Hitpoints,Ranged,Magic, and Prayer 22
50		Ancient staff	Magic 50 and completion of Desert Treasure I.
50		Granite maul	Strength 50
50		Granite hammer	Strength 50
50		Granite longsword	Strength 50
50		Iban's staff	Magic 50 and completion of Underground Pass.
50		Purging staff	Magic 77
50		Leaf-bladed spear	Slayer 55
50		Leaf-bladed sword	Slayer 55
50		Orange salamander	Ranged 50 Magic 50
55		Sulphur blades	None.
60		Arkan blade	Completion of The Final Dawn.
60		Barrelchest anchor	Strength 40 and completion of Great Brain Robbery.
60		Burning claws	None.
60		Colossal blade	Completion of Sleeping Giants.
60		Dragon	The dragon longsword and dragon dagger require completion of the Lost City quest.
The dragon mace and dragon battleaxe require completion of the Heroes' Quest.
The dragon halberd requires completion of Regicide.[1]
The dragon scimitar requires completion of Monkey Madness I.
60		Obsidian	The Obsidian maul (Tzhaar-ket-om) instead requires Strength 60, with no attack requirement.
The Obsidian staff also requires Magic 60
60		Red salamander	Ranged 60 Magic 60
60		Viggora's chainmace	None.
65		3rd age longsword	None.
65		Keris partisan	Completion of Beneath Cursed Sands.
65		Leaf-bladed battleaxe	Slayer 55
65		Sarachnis cudgel	None.
65		Zombie axe	None.
70		Abyssal bludgeon	Strength 70
70		Abyssal dagger	None.
70		Abyssal whip	None.
70		Avernic defender	Defence 70
70		Barrows	Strength 70 for Dharok's greataxe and Torag's hammers.
Magic 70 for Ahrim's staff.
70		Black salamander	Ranged 70 Magic 70
70		Blue moon spear	Magic 75
70		Crystal halberd	Strength 35 Agility 50 and completion of the Hard Western Provinces Diary.
70		Dual macuahuitl	Strength 75
70		Saradomin sword	None.
70		Ursine chainmace	None.
70		Zamorakian spear (Hasta)	None.
75		Abyssal tentacle	None.
75		Arclight	Completion of Shadow of the Storm.
75		Elder maul	Strength 75
75		Godswords	None.
75		Saradomin's blessed sword	None.
75		Staff of the dead	Magic 75
75		Voidwaker	None.
77		Emberlight	Smithing 74 (boostable).
Completion of While Guthix Sleeps.
78		Dragon hunter lance	Barbarian firemaking (excl. pyre step), fishing, and smithing training.
80		Blade of Saeldor	None.
80		Ghrazi rapier	None.
80		Inquisitor's mace	None.
80		Keris partisan of breaching (corruption) (the sun)	Completion of Tombs of Amascut.
80		Noxious halberd	None.
80		Scythe of vitur	Strength 90
80		Soulreaper axe	Strength 80
80		Tecu salamander	Ranged 80 Magic 80
82		Osmumten's fang	None.
 */

import { QuestRequirement, Requirement } from "../../../Requirement";
import { Skill } from "../../Skill";
import { SkillUnlock } from "./SkillUnlock";

/** Attack skill unlock interface */
export interface AttackUnlock extends SkillUnlock {
  level: number;
  name: string;
  description: string;
  skill: Skill.Attack;
  otherRequirements?: Requirement[];
}

/** Attack skill unlocks */
export const AttackUnlocks: AttackUnlock[] = [
  {
    level: 1,
    name: "Bronze",
    description: "None.",
    skill: Skill.Attack
  },
  {
    level: 1,
    name: "Iron",
    description: "None.",
    skill: Skill.Attack,
  },
  {
    level: 1,
    name: "Machetes",
    description: "None.",
    skill: Skill.Attack,
  },
  {
    level: 5,
    name: "Steel",
    description: "None.[1]",
    skill: Skill.Attack,
  },
  {
    level: 10,
    name: "Black",
    description: "None.[1]",
    skill: Skill.Attack,
  },
  {
    level: 10,
    name: "White",
    description: "Completion of the Wanted! quest.",
    otherRequirements: [ QuestRequirement.fromQuestName("Wanted!") ],
    skill: Skill.Attack,
  },
  {
    level: 15,
    name: "Ancient mace",
    description: "Prayer 25 and partial completion of Another Slice of H.A.M.",
    skill: Skill.Attack,
  },
  {
    level: 20,
    name: "Mithril",
    description: "None.[1]",
    skill: Skill.Attack,
  },
  {
    level: 30,
    name: "Adamant",
    description: "None.[1]",
    skill: Skill.Attack,
  },
  {
    level: 30,
    name: "Battlestaves",
    description: "Magic 30",
    skill: Skill.Attack,
  },
  {
    level: 30,
    name: "Swamp lizard",
    description: "Ranged 30 Magic 30",
    skill: Skill.Attack,
  },
  {
    level: 40,
    name: "Brine sabre",
    description: "None.",
    skill: Skill.Attack,
  },
  {
    level: 40,
    name: "Mystic staves",
    description: "Magic 40",
    skill: Skill.Attack,
  },
  {
    level: 40,
    name: "Rune",
    description: "None.[1]",
    skill: Skill.Attack,
  },
  {
    level: 42,
    name: "Void knight mace",
    description: "Attack 42,Strength,Defence,Hitpoints,Ranged,Magic, and Prayer 22",
    skill: Skill.Attack,
  },
];
