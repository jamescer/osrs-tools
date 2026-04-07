import { Item } from '../Item';

const bandosPage2Data = {
  id: 12614,
  name: "Bandos page 2",
  iconUrl: "/assets/items/bandos-page-2.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_page_2",
};

export const BandosPage2 = Item.fromJson(bandosPage2Data);
