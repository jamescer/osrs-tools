import { Item } from '../Item';

const fancyTiaraData = {
  id: 20008,
  name: "Fancy tiara",
  iconUrl: "/assets/items/fancy-tiara.png",
  examine: "Call me princess.",
  value: 8000,
  highAlch: 4800,
  lowAlch: 3200,
  weight: 0.05,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Fancy_tiara",
};

export const FancyTiara = Item.fromJson(fancyTiaraData);
