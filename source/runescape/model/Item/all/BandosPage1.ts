import { Item } from '../Item';

const bandosPage1Data = {
  id: 12613,
  name: "Bandos page 1",
  iconUrl: "/assets/items/bandos-page-1.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_page_1",
};

export const BandosPage1 = Item.fromJson(bandosPage1Data);
