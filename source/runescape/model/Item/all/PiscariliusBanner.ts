import { Item } from '../Item';

const piscariliusBannerData = {
  id: 20260,
  name: "Piscarilius banner",
  iconUrl: "/assets/items/piscarilius-banner.png",
  examine: "A stained glass banner displaying the Piscarilius sigil.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Piscarilius_banner",
};

export const PiscariliusBanner = Item.fromJson(piscariliusBannerData);
