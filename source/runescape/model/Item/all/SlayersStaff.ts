import { Item } from "../Item";

const SlayersStaffData = {
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
    id: 4170,
    name: "Slayer's staff"
  }
export const SlayersStaff = Item.fromJson(SlayersStaffData);
