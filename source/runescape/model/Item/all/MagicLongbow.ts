import { Item } from '../Item';

const magicLongbowData = {
    examine: "A nice sturdy magical bow.",
    value: 2560,
    highAlch: 1536,
    lowAlch: 1024,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Magic_longbow",
    id: 859,
    name: "Magic longbow",
    iconUrl: "/assets/items/859.png"
  }

export const MagicLongbow = Item.fromJson(magicLongbowData);
