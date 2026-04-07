import { Item } from '../Item';

const leprechaunHatData = {
  id: 12359,
  name: "Leprechaun hat",
  iconUrl: "/assets/items/leprechaun-hat.png",
  examine: "Top o' the morning!",
  value: 1000,
  highAlch: 600,
  lowAlch: 400,
  weight: 2.267,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Leprechaun_hat",
};

export const LeprechaunHat = Item.fromJson(leprechaunHatData);
