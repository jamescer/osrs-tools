import { Item } from '../Item';

const runeScimitarOrnamentKitGuthixData = {
  id: 23321,
  name: "Rune scimitar ornament kit (guthix)",
  iconUrl: "/assets/items/rune-scimitar-ornament-kit-guthix.png",
  examine: "Use on a rune scimitar to make it look fancier!",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.5,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: "2019-04-11",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_scimitar_ornament_kit_(guthix)",
};

export const RuneScimitarOrnamentKitGuthix = Item.fromJson(runeScimitarOrnamentKitGuthixData);
