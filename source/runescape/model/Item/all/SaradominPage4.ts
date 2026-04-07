import { Item } from '../Item';

const saradominPage4Data = {
  id: 3830,
  name: "Saradomin page 4",
  iconUrl: "/assets/items/saradomin-page-4.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_page_4",
};

export const SaradominPage4 = Item.fromJson(saradominPage4Data);
