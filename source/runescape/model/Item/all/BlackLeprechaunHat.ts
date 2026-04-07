import { Item } from '../Item';

const blackLeprechaunHatData = {
  id: 20246,
  name: "Black leprechaun hat",
  iconUrl: "/assets/items/black-leprechaun-hat.png",
  examine: "Try as they will, and try as they might, who steals me gold won't live through the night.",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 2.267,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_leprechaun_hat",
};

export const BlackLeprechaunHat = Item.fromJson(blackLeprechaunHatData);
