import { Item } from '../Item';

const goblinMaskData = {
    examine: "Let's start a flash mob!",
    value: 2000,
    highAlch: 1200,
    lowAlch: 800,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Goblin_mask",
    id: 12251,
    name: "Goblin mask",
    iconUrl: "/assets/items/12251.png"
  }

export const GoblinMask = Item.fromJson(goblinMaskData);
