import { Item } from '../Item';

const saradominPage2Data = {
  id: 3828,
  name: "Saradomin page 2",
  iconUrl: "/assets/items/saradomin-page-2.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_page_2",
};

export const SaradominPage2 = Item.fromJson(saradominPage2Data);
