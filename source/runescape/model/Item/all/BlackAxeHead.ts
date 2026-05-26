import { Item } from "../Item";

const BlackAxeHeadData = {
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
    id: 514,
    name: "Black axe head"
  }
export const BlackAxeHead = Item.fromJson(BlackAxeHeadData);
