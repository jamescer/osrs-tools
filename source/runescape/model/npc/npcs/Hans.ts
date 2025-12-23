import { Npc } from '../Npc';
import { NpcDrop } from '../NpcDrop';

export const hansDrops: NpcDrop[] = [
  // Hans does not drop anything when killed (not attackable in OSRS)
];

export const hansLocations: string[] = ['Lumbridge Castle'];

export const Hans = new Npc(
  2, // id (arbitrary, unique within your system)
  'Hans',
  'The loyal servant of Duke Horacio, found walking around Lumbridge Castle.',
  false, // members
  1, // combat level (not attackable, but shown as 1 in some sources)
  'https://oldschool.runescape.wiki/w/Hans',
  1, // hitpoints (not attackable, but set to 1 for completeness)
  false, // aggressive
  false, // attackable
  false, // canPoison
  false, // poisonous
  false, // canCannon
  false, // canThrall
  false, // canVenom
  ['none'], // attackStyle
  0, // maxHit
  0, // attackSpeed
  0, // respawnTime
  hansLocations,
  hansDrops,
  [], // weaknesses
);
