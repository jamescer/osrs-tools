import { Item } from '../Item';

const enchantedHatData = {
  id: 7400,
  name: "Enchanted hat",
  iconUrl: "/assets/items/enchanted-hat.png",
  examine: "A three pointed hat of magic.",
  value: 15000,
  highAlch: 9000,
  lowAlch: 6000,
  weight: 0.453,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-02-20",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Enchanted_hat",
};

export const EnchantedHat = Item.fromJson(enchantedHatData);
