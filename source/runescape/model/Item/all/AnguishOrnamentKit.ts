import { Item } from '../Item';

const anguishOrnamentKitData = {
  id: 22246,
  name: "Anguish ornament kit",
  iconUrl: "/assets/items/anguish-ornament-kit.png",
  examine: "Use on a necklace of anguish to make it look fancier!",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2018-01-25",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Anguish_ornament_kit",
};

export const AnguishOrnamentKit = Item.fromJson(anguishOrnamentKitData);
