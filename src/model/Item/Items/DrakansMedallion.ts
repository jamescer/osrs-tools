import { Item } from '../Item';

const drakansMedallionData = {
  attackCrush: 0,

  attackMagic: 0,

  attackRanged: 0,

  attackSlash: 0,

  // Combat stats - no combat bonuses
  attackStab: 0,

  defenceCrush: 0,

  defenceMagic: 0,

  defenceRanged: 0,

  defenceSlash: 0,

  defenceStab: 0,

  destroy: 'You can reclaim this from your player-owned house Quest storage chest.',

  equipable: true,

  examine: 'A medallion that allows teleportation to various locations in Morytania.',
  id: 22944,
  members: true,
  name: "Drakan's medallion",
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Drakan%27s_medallion',
  questItem: false,
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.006,
};

export const DrakansMedallion = Item.fromJson(drakansMedallionData);
