import { Item } from '../Item';

const spikedManaclesData = {{
    examine: "Some very spikey metal bands, better make sure I don't cut myself while walking.",
    value: 2500,
    highAlch: 1500,
    lowAlch: 1000,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Spiked_manacles",
    id: 23389,
    name: "Spiked manacles",
    iconUrl: "/assets/items/23389.png"
  }

export const SpikedManacles = Item.fromJson(spikedManaclesData);
