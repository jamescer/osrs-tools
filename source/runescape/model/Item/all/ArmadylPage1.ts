import { Item } from '../Item';

const armadylPage1Data = {
  id: 12617,
  name: "Armadyl page 1",
  iconUrl: "/assets/items/armadyl-page-1.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_page_1",
};

export const ArmadylPage1 = Item.fromJson(armadylPage1Data);
