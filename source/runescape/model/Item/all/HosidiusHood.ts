import { Item } from '../Item';

const hosidiusHoodData = {
  id: 20116,
  name: "Hosidius hood",
  iconUrl: "/assets/items/hosidius-hood.png",
  examine: "A rare hood from Hosidius.",
  value: 1,
  highAlch: 0,
  lowAlch: 0,
  weight: 0.1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Hosidius_hood",
};

export const HosidiusHood = Item.fromJson(hosidiusHoodData);
