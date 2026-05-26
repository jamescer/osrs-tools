import { Item } from '../Item';

const royalGownTopData = {
    examine: "Feeling distinctly ornate.",
    value: 5000,
    highAlch: 3000,
    lowAlch: 2000,
    weight: 1.36,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Royal_gown_top",
    id: 12393,
    name: "Royal gown top",
    iconUrl: "/assets/items/12393.png"
  }

export const RoyalGownTop = Item.fromJson(royalGownTopData);
