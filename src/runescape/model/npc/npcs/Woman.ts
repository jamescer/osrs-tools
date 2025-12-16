import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

// Woman.ts

export const Woman: Npc = {
  aggressive: false,
  attackSpeed: 0,
  attackStyles: ['Melee'],
  attackable: true,
  canCannon: false,
  canPoison: false,
  canThrall: false,
  canVenom: false,
  combatLevel: 2,
  drops: [new NpcDrop('Bones', 1, 'Always')],
  examine: "She looks like she's in need of a friend.",
  hitpoints: 7,
  id: 4,
  locations: ['Lumbridge', 'Varrock', 'Falador', 'Ardougne', 'Draynor Village', 'Edgeville'],
  maxHit: 0,
  members: false,
  name: 'Woman',
  officialWikiUrl: '',
  poisonous: false,
  respawnTime: 25,
  weaknesses: [],
};
