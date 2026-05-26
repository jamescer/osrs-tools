import { Item } from "../Item";

const TeaLeavesData = {
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
    id: 7738,
    name: "Tea leaves"
  }
export const TeaLeaves = Item.fromJson(TeaLeavesData);
