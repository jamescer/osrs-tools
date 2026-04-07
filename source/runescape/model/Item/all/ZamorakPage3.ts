import { Item } from '../Item';

const zamorakPage3Data = {
  id: 3833,
  name: "Zamorak page 3",
  iconUrl: "/assets/items/zamorak-page-3.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_page_3",
};

export const ZamorakPage3 = Item.fromJson(zamorakPage3Data);
