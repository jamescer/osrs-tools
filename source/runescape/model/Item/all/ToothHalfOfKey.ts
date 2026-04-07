import { Item } from '../Item';

const toothHalfOfKeyData = {
  id: 985,
  name: "Tooth half of key",
  iconUrl: "/assets/items/tooth-half-of-key.png",
  examine: "The tooth end of the mysterious Crystal Key. Can you find the other half?",
  value: 100,
  highAlch: 60,
  lowAlch: 40,
  weight: 0.005,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2002-02-27",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Tooth_half_of_key",
};

export const ToothHalfOfKey = Item.fromJson(toothHalfOfKeyData);
