import { Item } from '../Item';

const adamantCaneData = {
  id: 12377,
  name: "Adamant cane",
  iconUrl: "/assets/items/adamant-cane.png",
  examine: "A diamond topped cane.",
  value: 1440,
  highAlch: 864,
  lowAlch: 576,
  weight: 1.814,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Adamant_cane",
};

export const AdamantCane = Item.fromJson(adamantCaneData);
