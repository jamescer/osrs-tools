import { Item } from '../Item';

const ThirdAgeCloakData = {
  id: 12437,
  name: "3rd age cloak",
  iconUrl: "/assets/items/3rd-age-cloak.png",
  examine: "A beautiful cloak woven by ancient tailors.",
  value: 85000,
  highAlch: 51000,
  lowAlch: 34000,
  weight: 0.005,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_cloak",
};

export const ThirdAgeCloak = Item.fromJson(ThirdAgeCloakData);
