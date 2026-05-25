import { Item } from '../Item';

const dragonScimitarOrnamentKitData = {{
    examine: "Use on the dragon scimitar to trim it with gold.",
    value: 5000,
    highAlch: 3000,
    lowAlch: 2000,
    weight: 0.5,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "2016-07-06",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_scimitar_ornament_kit",
    id: 20002,
    name: "Dragon scimitar ornament kit",
    iconUrl: "/assets/items/20002.png"
  }

export const DragonScimitarOrnamentKit = Item.fromJson(dragonScimitarOrnamentKitData);
