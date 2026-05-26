import { Item } from "../Item";

const WhiteMagicStaffData = {
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
    id: 6603,
    name: "White magic staff"
  }
export const WhiteMagicStaff = Item.fromJson(WhiteMagicStaffData);
