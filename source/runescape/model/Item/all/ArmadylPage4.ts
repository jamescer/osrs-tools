import { Item } from '../Item';

const armadylPage4Data = {
  id: 12620,
  name: "Armadyl page 4",
  iconUrl: "/assets/items/armadyl-page-4.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_page_4",
};

export const ArmadylPage4 = Item.fromJson(armadylPage4Data);
