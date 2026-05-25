import { Item } from "../Item";

const CrateOfLootyData = {{
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
    id: 32808,
    name: "Crate of looty"
  }
export const CrateOfLooty = Item.fromJson(CrateOfLootyData);