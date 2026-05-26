import { Item } from "../Item";

const SweetcornData = {
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
    id: 5986,
    name: "Sweetcorn"
  }
export const Sweetcorn = Item.fromJson(SweetcornData);
