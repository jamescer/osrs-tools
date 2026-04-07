import { Item } from '../Item';

const bandosPage3Data = {
  id: 12615,
  name: "Bandos page 3",
  iconUrl: "/assets/items/bandos-page-3.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_page_3",
};

export const BandosPage3 = Item.fromJson(bandosPage3Data);
