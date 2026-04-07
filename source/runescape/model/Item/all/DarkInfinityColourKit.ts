import { Item } from '../Item';

const darkInfinityColourKitData = {
  id: 12528,
  name: "Dark infinity colour kit",
  iconUrl: "/assets/items/dark-infinity-colour-kit.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dark_infinity_colour_kit",
};

export const DarkInfinityColourKit = Item.fromJson(darkInfinityColourKitData);
