import { Item } from '../Item';

const yewCompBowData = {
    examine: "A powerful bow made from yew wood.",
    value: 1800,
    highAlch: 1080,
    lowAlch: 720,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Yew_comp_bow",
    id: 10282,
    name: "Yew comp bow",
    iconUrl: "/assets/items/10282.png"
  }

export const YewCompBow = Item.fromJson(yewCompBowData);
