import { Item } from '../Item';

const furyOrnamentKitData = {
  id: 12526,
  name: "Fury ornament kit",
  iconUrl: "/assets/items/fury-ornament-kit.png",
  examine: "Use on an amulet of fury to make it look fancier!",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Fury_ornament_kit",
};

export const FuryOrnamentKit = Item.fromJson(furyOrnamentKitData);
