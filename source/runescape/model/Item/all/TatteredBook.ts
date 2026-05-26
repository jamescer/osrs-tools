import { Item } from "../Item";

const TatteredBookData = {
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
    id: 21714,
    name: "Tattered book"
  }
export const TatteredBook = Item.fromJson(TatteredBookData);
