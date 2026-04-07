import { Item } from '../Item';

const bandosPage4Data = {
  id: 12616,
  name: "Bandos page 4",
  iconUrl: "/assets/items/bandos-page-4.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_page_4",
};

export const BandosPage4 = Item.fromJson(bandosPage4Data);
