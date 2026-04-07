import { Item } from '../Item';

const hosidiusBannerData = {
  id: 20254,
  name: "Hosidius banner",
  iconUrl: "/assets/items/hosidius-banner.png",
  examine: "A banner made of redwood bearing the Hosidius sigil.",
  value: 70,
  highAlch: 42,
  lowAlch: 28,
  weight: 2.267,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Hosidius_banner",
};

export const HosidiusBanner = Item.fromJson(hosidiusBannerData);
