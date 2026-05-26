import { Item } from "../Item";

const MysticMudStaffData = {
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
    id: 6563,
    name: "Mystic mud staff"
  }
export const MysticMudStaff = Item.fromJson(MysticMudStaffData);
