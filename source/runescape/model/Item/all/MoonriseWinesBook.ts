import { Item } from "../Item";

const MoonriseWinesBookData = {
    examine: "",
    value: 0,
    highAlch: 0,
    lowAlch: 0,
    weight: 0,
    members: false,
    tradeable: false,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "",
    id: 30035,
    name: "Moonrise wines (book)"
  }
export const MoonriseWinesBook = Item.fromJson(MoonriseWinesBookData);
