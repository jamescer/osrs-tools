import { Item } from '../Item';

const wineOfZamorakData = {
  id: 245,
  name: "Wine of zamorak",
  iconUrl: "/assets/items/wine-of-zamorak.png",
  examine: "An evil wine for an evil god.",
  value: 1,
  highAlch: 0,
  lowAlch: 0,
  weight: 0.085,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: "2002-02-27",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Wine_of_zamorak",
};

export const WineOfZamorak = Item.fromJson(wineOfZamorakData);
