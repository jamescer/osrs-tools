import { Item } from '../Item';

const sharkData = {
    examine: "I'd better be careful eating this.",
    value: 170,
    highAlch: 102,
    lowAlch: 68,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Shark",
    id: 385,
    name: "Shark",
    iconUrl: "/assets/items/385.png"
  }

export const Shark = Item.fromJson(sharkData);
