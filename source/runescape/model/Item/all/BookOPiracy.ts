import { Item } from "../Item";

const BookOPiracyData = {
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
    id: 7144,
    name: "Book o' piracy"
  }
export const BookOPiracy = Item.fromJson(BookOPiracyData);
