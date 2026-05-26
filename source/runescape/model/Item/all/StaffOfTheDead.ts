import { Item } from "../Item";

const StaffOfTheDeadData = {
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
    id: 11791,
    name: "Staff of the dead"
  }
export const StaffOfTheDead = Item.fromJson(StaffOfTheDeadData);
