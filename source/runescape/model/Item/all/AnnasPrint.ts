import { Item } from "../Item";

const AnnasPrintData = {
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
    id: 1816,
    name: "Anna's print"
  }
export const AnnasPrint = Item.fromJson(AnnasPrintData);
