import { Item } from '../Item';

const guthixBracersData = {
    examine: "Guthix blessed dragonhide vambraces.",
    value: 6000,
    highAlch: 3600,
    lowAlch: 2400,
    weight: 1,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2006-12-05",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_bracers",
    id: 10376,
    name: "Guthix bracers",
    iconUrl: "/assets/items/10376.png"
  }

export const GuthixBracers = Item.fromJson(guthixBracersData);
