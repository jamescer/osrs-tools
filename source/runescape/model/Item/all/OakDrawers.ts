import { Item } from "../Item";

const OakDrawersData = {
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
    id: 8039,
    name: "Oak drawers"
  }
export const OakDrawers = Item.fromJson(OakDrawersData);
