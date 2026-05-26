import { Item } from "../Item";

const CrateOfOnionsData = {
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
    id: 32555,
    name: "Crate of onions"
  }
export const CrateOfOnions = Item.fromJson(CrateOfOnionsData);
