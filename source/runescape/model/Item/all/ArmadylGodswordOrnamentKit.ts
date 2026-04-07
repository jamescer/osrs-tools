import { Item } from '../Item';

const armadylGodswordOrnamentKitData = {
  id: 20068,
  name: "Armadyl godsword ornament kit",
  iconUrl: "/assets/items/armadyl-godsword-ornament-kit.png",
  examine: "Use on an Armadyl godsword to make it look fancier!",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_godsword_ornament_kit",
};

export const ArmadylGodswordOrnamentKit = Item.fromJson(armadylGodswordOrnamentKitData);
