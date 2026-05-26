import { Item } from "../Item";

const GiannesCookBookData = {
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
    id: 2167,
    name: "Gianne's cook book"
  }
export const GiannesCookBook = Item.fromJson(GiannesCookBookData);
