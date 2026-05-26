import { Item } from '../Item';

const lightInfinityColourKitData = {
    examine: "Use on infinity pieces to recolour them!",
    value: 5000,
    highAlch: 3000,
    lowAlch: 2000,
    weight: 0.5,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "2014-06-12",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Light_infinity_colour_kit",
    id: 12530,
    name: "Light infinity colour kit",
    iconUrl: "/assets/items/12530.png"
  }

export const LightInfinityColourKit = Item.fromJson(lightInfinityColourKitData);
