import { Item } from '../Item';

const ancientPage1Data = {
  id: 12621,
  name: "Ancient page 1",
  iconUrl: "/assets/items/ancient-page-1.png",
  examine: "This seems to have been torn from a book...",
  value: 400,
  highAlch: 240,
  lowAlch: 160,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2014-07-03",
  destroy: "Drop",
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_page_1",
};

export const AncientPage1 = Item.fromJson(ancientPage1Data);
