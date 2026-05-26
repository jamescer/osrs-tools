import { Item } from "../Item";

const MysticEarthStaffData = {
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
    id: 1407,
    name: "Mystic earth staff"
  }
export const MysticEarthStaff = Item.fromJson(MysticEarthStaffData);
