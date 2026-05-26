import { Item } from '../Item';

const battlestaffData = {
    examine: "It's a slightly magical stick.",
    value: 7000,
    highAlch: 4200,
    lowAlch: 2800,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Battlestaff",
    id: 1391,
    name: "Battlestaff",
    iconUrl: "/assets/items/1391.png"
  }

export const Battlestaff = Item.fromJson(battlestaffData);
