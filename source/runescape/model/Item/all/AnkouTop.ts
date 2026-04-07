import { Item } from '../Item';

const ankouTopData = {
  id: 20098,
  name: "Ankou top",
  iconUrl: "/assets/items/ankou-top.png",
  examine: "This top will make your flesh transparent.",
  value: 1,
  highAlch: 0,
  lowAlch: 0,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ankou_top",
};

export const AnkouTop = Item.fromJson(ankouTopData);
