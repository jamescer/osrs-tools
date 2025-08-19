import { Item } from '../Item';

const drakansMedallionData = {
  id: 22944,
  name: "Drakan's medallion",
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 0,
  examine: 'A medallion that allows teleportation to various locations in Morytania.',
  equipable: true,
  weight: 0.006,
  questItem: false,
  destroy: 'You can reclaim this from your player-owned house Quest storage chest.',
  // Combat stats - no combat bonuses
  attackStab: 0,
  attackSlash: 0,
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  defenceStab: 0,
  defenceSlash: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Drakan%27s_medallion',
};

export const DrakansMedallion = Item.fromJson(drakansMedallionData);
