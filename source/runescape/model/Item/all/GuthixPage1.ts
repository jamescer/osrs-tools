import { Item } from '../Item';

const guthixPage1Data = {
  id: 3835,
  name: "Guthix page 1",
  iconUrl: "/assets/items/guthix-page-1.png",
  examine: "This seems to have been torn from a book...",
  value: 200,
  highAlch: 120,
  lowAlch: 80,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2004-11-17",
  destroy: "Drop",
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_page_1",
};

export const GuthixPage1 = Item.fromJson(guthixPage1Data);
