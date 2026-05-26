import { Item } from "../Item";

const IronAxeHeadData = {
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
    id: 510,
    name: "Iron axe head"
  }
export const IronAxeHead = Item.fromJson(IronAxeHeadData);
