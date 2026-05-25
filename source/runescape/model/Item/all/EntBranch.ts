import { Item } from "../Item";

const EntBranchData = {{
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
    id: 31032,
    name: "Ent branch"
  }
export const EntBranch = Item.fromJson(EntBranchData);