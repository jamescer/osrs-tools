import { Item } from "../Item";

const ChemicalCompoundData = {{
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
    id: 707,
    name: "Chemical compound"
  }
export const ChemicalCompound = Item.fromJson(ChemicalCompoundData);