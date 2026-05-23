import { Item } from '../Item';

const adamantBattleaxeData = {
  id: 1371,
  name: "Adamant battleaxe",
  iconUrl: '/assets/items/1371.png',
  examine: "A vicious looking axe.",
  value: 4160,
  highAlch: 2496,
  lowAlch: 1664,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_battleaxe',
};

export const AdamantBattleaxe = Item.fromJson(adamantBattleaxeData);
