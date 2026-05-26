import { Item } from "../Item";

const QueenHelpBookData = {
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
    id: 10562,
    name: "Queen help book"
  }
export const QueenHelpBook = Item.fromJson(QueenHelpBookData);
