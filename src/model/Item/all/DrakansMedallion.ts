import { Item, ItemJson } from '../Item';

const drakansMedallionData: ItemJson = {
  attackCrush: 0,
  attackMagic: 0,
  attackRanged: 0,
  attackSlash: 0,
  attackStab: 0,
  defenceCrush: 0,
  defenceMagic: 0,
  defenceRanged: 0,
  defenceSlash: 0,
  defenceStab: 0,
  destroy: 'You can reclaim this from your player-owned house Quest storage chest.',
  equipable: true,
  examine: 'A medallion that allows teleportation to various locations in Morytania.',
  highAlch: 0,
  id: 22944,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: "Drakan's medallion",
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Drakan%27s_medallion',
  prayer: 0,
  questItem: false,
  releaseDate: '24 June 2020',
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.006,
};

export const DrakansMedallion = Item.fromJson(drakansMedallionData);
