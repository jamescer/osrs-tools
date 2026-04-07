import { Item } from '../Item';

const saradominPage1Data = {
  id: 3827,
  name: "Saradomin page 1",
  iconUrl: "/assets/items/saradomin-page-1.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_page_1",
};

export const SaradominPage1 = Item.fromJson(saradominPage1Data);
