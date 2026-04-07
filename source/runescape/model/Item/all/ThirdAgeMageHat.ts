import { Item } from '../Item';

const ThirdAgeMageHatData = {
  id: 10342,
  name: "3rd age mage hat",
  iconUrl: "/assets/items/3rd-age-mage-hat.png",
  examine: "Fabulously ancient mage protection enchanted in the 3rd Age.",
  value: 50400,
  highAlch: 30240,
  lowAlch: 20160,
  weight: 0.4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_mage_hat",
};

export const ThirdAgeMageHat = Item.fromJson(ThirdAgeMageHatData);
