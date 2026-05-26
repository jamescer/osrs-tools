import { Item } from '../Item';

const magicCompBowData = {
    examine: "A powerful bow made from magic wood.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Magic_comp_bow",
    id: 10284,
    name: "Magic comp bow",
    iconUrl: "/assets/items/10284.png"
  }

export const MagicCompBow = Item.fromJson(magicCompBowData);
