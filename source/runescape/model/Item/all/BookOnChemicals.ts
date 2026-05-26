import { Item } from "../Item";

const BookOnChemicalsData = {
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
    id: 711,
    name: "Book on chemicals"
  }
export const BookOnChemicals = Item.fromJson(BookOnChemicalsData);
