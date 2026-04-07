import { Item } from '../Item';

const zamorakPage1Data = {
  id: 3831,
  name: "Zamorak page 1",
  iconUrl: "/assets/items/zamorak-page-1.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Zamorak_page_1",
};

export const ZamorakPage1 = Item.fromJson(zamorakPage1Data);
