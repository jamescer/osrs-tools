import { Item } from '../Item';

const cabbageRoundShieldData = {
  id: 20272,
  name: "Cabbage round shield",
  iconUrl: "/assets/items/cabbage-round-shield.png",
  examine: "An adamant shield shaped like a cabbage.",
  value: 3000,
  highAlch: 1800,
  lowAlch: 1200,
  weight: 4.535,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Cabbage_round_shield",
};

export const CabbageRoundShield = Item.fromJson(cabbageRoundShieldData);
