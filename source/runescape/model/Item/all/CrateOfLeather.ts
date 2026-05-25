import { Item } from "../Item";

const CrateOfLeatherData = {{
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
    id: 32785,
    name: "Crate of leather"
  }
export const CrateOfLeather = Item.fromJson(CrateOfLeatherData);