import { Item } from "../Item";

const MysticMistStaffData = {
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
    id: 20733,
    name: "Mystic mist staff"
  }
export const MysticMistStaff = Item.fromJson(MysticMistStaffData);
