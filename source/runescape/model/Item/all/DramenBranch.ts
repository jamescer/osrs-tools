import { Item } from "../Item";

const DramenBranchData = {{
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
    id: 771,
    name: "Dramen branch"
  }
export const DramenBranch = Item.fromJson(DramenBranchData);