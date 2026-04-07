import { Item } from '../Item';

const zamorakPage4Data = {
  id: 3834,
  name: "Zamorak page 4",
  iconUrl: "/assets/items/zamorak-page-4.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_page_4",
};

export const ZamorakPage4 = Item.fromJson(zamorakPage4Data);
