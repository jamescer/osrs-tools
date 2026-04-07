import { Item } from '../Item';

const guthixPage2Data = {
  id: 3836,
  name: "Guthix page 2",
  iconUrl: "/assets/items/guthix-page-2.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_page_2",
};

export const GuthixPage2 = Item.fromJson(guthixPage2Data);
