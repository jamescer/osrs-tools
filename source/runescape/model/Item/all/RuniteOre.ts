import { Item } from '../Item';

const runiteOreData = {
  id: 451,
  name: "Runite ore",
  iconUrl: "/assets/items/runite-ore.png",
  examine: "This needs refining.",
  value: 3200,
  highAlch: 1920,
  lowAlch: 1280,
  weight: 2.267,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: "2001-08-13",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Runite_ore",
};

export const RuniteOre = Item.fromJson(runiteOreData);
