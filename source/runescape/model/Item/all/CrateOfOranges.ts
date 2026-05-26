import { Item } from "../Item";

const CrateOfOrangesData = {
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
    id: 32508,
    name: "Crate of oranges"
  }
export const CrateOfOranges = Item.fromJson(CrateOfOrangesData);
