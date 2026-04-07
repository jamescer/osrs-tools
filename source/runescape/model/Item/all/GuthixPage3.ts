import { Item } from '../Item';

const guthixPage3Data = {
  id: 3837,
  name: "Guthix page 3",
  iconUrl: "/assets/items/guthix-page-3.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_page_3",
};

export const GuthixPage3 = Item.fromJson(guthixPage3Data);
