import { Item } from "../Item";

const OverseersBookData = {
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
    id: 13279,
    name: "Overseer's book"
  }
export const OverseersBook = Item.fromJson(OverseersBookData);
