import { Item } from '../Item';

const gildedSpadeData = {
    examine: "Oh, I'm a gold digger?",
    value: 1000,
    highAlch: 600,
    lowAlch: 400,
    weight: 3,
    members: false,
    tradeable: true,
    equipable: true,
    releaseDate: "2019-04-11",
    destroy: "Wield",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_spade",
    id: 23282,
    name: "Gilded spade",
    iconUrl: "/assets/items/23282.png"
  }

export const GildedSpade = Item.fromJson(gildedSpadeData);
