import { Item } from '../Item';

const lobsterData = {
    examine: "This looks tricky to eat.",
    value: 70,
    highAlch: 42,
    lowAlch: 28,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Lobster",
    id: 379,
    name: "Lobster",
    iconUrl: "/assets/items/379.png"
  }

export const Lobster = Item.fromJson(lobsterData);
