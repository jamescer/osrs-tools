import { Item } from "../Item";

const StaffOfArmadylData = {
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
    id: 84,
    name: "Staff of armadyl"
  }
export const StaffOfArmadyl = Item.fromJson(StaffOfArmadylData);
