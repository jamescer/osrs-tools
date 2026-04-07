import { Item } from '../Item';

const onyxBoltsEData = {
  id: 9245,
  name: "Onyx bolts (e)",
  iconUrl: "/assets/items/onyx-bolts-e.png",
  examine: "Enchanted Onyx tipped Runite Crossbow Bolts.",
  value: 15000,
  highAlch: 9000,
  lowAlch: 6000,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-07-31",
  destroy: "Wield",
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Onyx_bolts_(e)",
};

export const OnyxBoltsE = Item.fromJson(onyxBoltsEData);
