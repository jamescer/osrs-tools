import { Item } from "../Item";

const MysticWaterStaffData = {
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
    id: 1403,
    name: "Mystic water staff"
  }
export const MysticWaterStaff = Item.fromJson(MysticWaterStaffData);
