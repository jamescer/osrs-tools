import { Item } from '../Item';

const drakansMedallionData = {
  equipable: true,
  examine: 'A medallion that allows teleportation to various locations in Morytania.',
  id: 22944,
  members: true,
  // Combat stats - no combat bonuses
attackStab: 0,
  
name: "Drakan's medallion",

  noted: false,

  attackCrush: 0,

  questItem: false,

  attackMagic: 0,

  stackable: false,

  attackRanged: 0,

  attackSlash: 0,
  tradeable: false,
  defenceCrush: 0,
  defenceMagic: 0,
  value: 0,
  defenceRanged: 0,
  weight: 0.006,
  defenceSlash: 0,
  defenceStab: 0,
  destroy: 'You can reclaim this from your player-owned house Quest storage chest.',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Drakan%27s_medallion',
};

export const DrakansMedallion = Item.fromJson(drakansMedallionData);
