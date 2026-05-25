import { Item } from '../Item';

const enchantedHatData = {{
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
    id: 7400,
    name: "Enchanted hat",
    iconUrl: "/assets/items/7400.png"
  }

export const EnchantedHat = Item.fromJson(enchantedHatData);
