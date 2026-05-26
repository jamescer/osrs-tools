import { Item } from "../Item";

const BookcaseFlatpackData = {
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
    id: 8510,
    name: "Bookcase (flatpack)"
  }
export const BookcaseFlatpack = Item.fromJson(BookcaseFlatpackData);
