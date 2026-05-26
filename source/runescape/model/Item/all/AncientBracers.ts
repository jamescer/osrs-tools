import { Item } from '../Item';

const ancientBracersData = {
    examine: "Ancient blessed dragonhide vambraces.",
    value: 4000,
    highAlch: 2400,
    lowAlch: 1600,
    weight: 1,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_bracers",
    id: 12490,
    name: "Ancient bracers",
    iconUrl: "/assets/items/12490.png"
  }

export const AncientBracers = Item.fromJson(ancientBracersData);
