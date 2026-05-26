import { Item } from '../Item';

const adamantAxeData = {
    examine: "A powerful axe.",
    value: 1280,
    highAlch: 768,
    lowAlch: 512,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Adamant_axe",
    id: 1357,
    name: "Adamant axe",
    iconUrl: "/assets/items/1357.png"
  }

export const AdamantAxe = Item.fromJson(adamantAxeData);
