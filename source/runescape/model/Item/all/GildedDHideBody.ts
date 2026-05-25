import { Item } from '../Item';

const gildedDHideBodyData = {{
    examine: "Made with 100% golden dragonhide.",
    value: 50000,
    highAlch: 30000,
    lowAlch: 20000,
    weight: 6,
    members: false,
    tradeable: true,
    equipable: true,
    releaseDate: "2019-04-11",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_d'hide_body",
    id: 23264,
    name: "Gilded d'hide body",
    iconUrl: "/assets/items/23264.png"
  }

export const GildedDHideBody = Item.fromJson(gildedDHideBodyData);
