import { Item, ItemJson } from '../Item';

const paladinCredentialsData: ItemJson = {
  destroy: "You'll need to speak to Sir Amik Varze to get another one.",
  equipable: false,
  examine: 'Proves my acceptance into the order of paladins.',
  highAlch: 0,
  id: 8780,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: "Paladin's credentials",
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Paladin%27s_credentials',
  prayer: 0,
  questItem: true,
  releaseDate: '9 August 2006',
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.001,
  iconUrl: "",
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
  rangedStrength: 0,
  magicDamage: 0
};

export const PaladinCredentials = Item.fromJson(paladinCredentialsData);
