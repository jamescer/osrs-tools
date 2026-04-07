import { Item } from '../Item';

const whiteBoaterData = {
  id: 12313,
  name: "White boater",
  iconUrl: "/assets/items/white-boater.png",
  examine: "Stylish!",
  value: 225,
  highAlch: 135,
  lowAlch: 90,
  weight: 0.01,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/White_boater",
};

export const WhiteBoater = Item.fromJson(whiteBoaterData);
