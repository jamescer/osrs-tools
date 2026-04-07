import { Item } from '../Item';

const ankouGlovesData = {
  id: 20101,
  name: "Ankou gloves",
  iconUrl: "/assets/items/ankou-gloves.png",
  examine: "These gloves will make your flesh transparent.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ankou_gloves",
};

export const AnkouGloves = Item.fromJson(ankouGlovesData);
