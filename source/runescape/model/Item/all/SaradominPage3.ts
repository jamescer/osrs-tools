import { Item } from '../Item';

const saradominPage3Data = {
  id: 3829,
  name: "Saradomin page 3",
  iconUrl: "/assets/items/saradomin-page-3.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_page_3",
};

export const SaradominPage3 = Item.fromJson(saradominPage3Data);
