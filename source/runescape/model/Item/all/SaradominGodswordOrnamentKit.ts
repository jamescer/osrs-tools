import { Item } from '../Item';

const saradominGodswordOrnamentKitData = {
  id: 20074,
  name: "Saradomin godsword ornament kit",
  iconUrl: "/assets/items/saradomin-godsword-ornament-kit.png",
  examine: "Use on a Saradomin godsword to make it look fancier!",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_godsword_ornament_kit",
};

export const SaradominGodswordOrnamentKit = Item.fromJson(saradominGodswordOrnamentKitData);
