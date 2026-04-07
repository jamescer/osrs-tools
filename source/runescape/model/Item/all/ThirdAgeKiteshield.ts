import { Item } from '../Item';

const ThirdAgeKiteshieldData = {
  id: 10352,
  name: "3rd age kiteshield",
  iconUrl: "/assets/items/3rd-age-kiteshield.png",
  examine: "Fabulously ancient armour beaten from magical silver.",
  value: 180000,
  highAlch: 108000,
  lowAlch: 72000,
  weight: 2.721,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_kiteshield",
};

export const ThirdAgeKiteshield = Item.fromJson(ThirdAgeKiteshieldData);
