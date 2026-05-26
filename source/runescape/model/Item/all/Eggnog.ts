import { Item } from "../Item";

const EggnogData = {
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
    id: 27563,
    name: "Eggnog"
  }
export const Eggnog = Item.fromJson(EggnogData);
