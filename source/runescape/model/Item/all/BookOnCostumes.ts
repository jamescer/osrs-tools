import { Item } from "../Item";

const BookOnCostumesData = {
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
    id: 5065,
    name: "Book on costumes"
  }
export const BookOnCostumes = Item.fromJson(BookOnCostumesData);
