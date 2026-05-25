import { Item } from "../Item";

const CrateOfGrogData = {{
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
    id: 32490,
    name: "Crate of grog"
  }
export const CrateOfGrog = Item.fromJson(CrateOfGrogData);