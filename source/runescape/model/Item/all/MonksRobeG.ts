import { Item } from '../Item';

const monksRobeGData = {
    examine: "A religious robe, decorated with gold trim.",
    value: 1560,
    highAlch: 936,
    lowAlch: 624,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2003-05-08",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Monk's_robe_(g)",
    id: 7641,
    name: "Monk's robe (g)",
    iconUrl: "/assets/items/7641.png"
  }

export const MonksRobeG = Item.fromJson(monksRobeGData);
