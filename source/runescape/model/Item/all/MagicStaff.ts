import { Item } from "../Item";

const MagicStaffData = {
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
    id: 1389,
    name: "Magic staff"
  }
export const MagicStaff = Item.fromJson(MagicStaffData);
