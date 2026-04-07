import { Item } from '../Item';

const armadylPage3Data = {
  id: 12619,
  name: "Armadyl page 3",
  iconUrl: "/assets/items/armadyl-page-3.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_page_3",
};

export const ArmadylPage3 = Item.fromJson(armadylPage3Data);
