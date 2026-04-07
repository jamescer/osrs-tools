import { Item } from '../Item';

const tortureOrnamentKitData = {
  id: 20062,
  name: "Torture ornament kit",
  iconUrl: "/assets/items/torture-ornament-kit.png",
  examine: "Use on an amulet of torture to make it look fancier!",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Torture_ornament_kit",
};

export const TortureOrnamentKit = Item.fromJson(tortureOrnamentKitData);
