import { Item } from "../Item";

const SteelAxeHeadData = {
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
    id: 512,
    name: "Steel axe head"
  }
export const SteelAxeHead = Item.fromJson(SteelAxeHeadData);
