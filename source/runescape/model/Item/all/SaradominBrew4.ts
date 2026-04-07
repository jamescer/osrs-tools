import { Item } from '../Item';

const saradominBrew4Data = {
  id: 6685,
  name: "Saradomin brew(4)",
  iconUrl: "/assets/items/saradomin-brew-4.png",
  examine: "4 doses of Saradomin brew.",
  value: 200,
  highAlch: 120,
  lowAlch: 80,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2001-01-01",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_brew(4)",
};

export const SaradominBrew4 = Item.fromJson(saradominBrew4Data);
