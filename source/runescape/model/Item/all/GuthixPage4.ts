import { Item } from '../Item';

const guthixPage4Data = {
  id: 3838,
  name: "Guthix page 4",
  iconUrl: "/assets/items/guthix-page-4.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_page_4",
};

export const GuthixPage4 = Item.fromJson(guthixPage4Data);
