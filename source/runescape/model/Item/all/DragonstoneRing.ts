import { Item } from '../Item';

const dragonstoneRingData = {
  id: 1645,
  name: "Dragonstone ring",
  iconUrl: "/assets/items/dragonstone-ring.png",
  examine: "A valuable ring.",
  value: 17625,
  highAlch: 10575,
  lowAlch: 7050,
  weight: 0.006,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2002-02-27",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragonstone_ring",
};

export const DragonstoneRing = Item.fromJson(dragonstoneRingData);
