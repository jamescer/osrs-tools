import { Item } from '../Item';

const swordfishData = {{
    examine: "I'd better be careful eating this!",
    value: 80,
    highAlch: 48,
    lowAlch: 32,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Swordfish",
    id: 373,
    name: "Swordfish",
    iconUrl: "/assets/items/373.png"
  }

export const Swordfish = Item.fromJson(swordfishData);
