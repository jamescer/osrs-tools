import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

// Woman.ts

export const Woman: Npc = {
  aggressive: false,
  attackStyles: ['Melee'],
  attackable: true,
  combatLevel: 2,
  canPoison: false,
  drops: [new NpcDrop('Bones', 1, 'Always')],
  canCannon: false,
  examine: "She looks like she's in need of a friend.",
  canThrall: false,
  id: 4,
  attackSpeed: 0,
  name: 'Woman',
  canVenom: false,
  hitpoints: 7,
  locations: ['Lumbridge', 'Varrock', 'Falador', 'Ardougne', 'Draynor Village', 'Edgeville'],
  maxHit: 0,
  members: false,
  respawnTime: 25,
  officialWikiUrl: '',
  poisonous: false,
  weaknesses: [],
};
