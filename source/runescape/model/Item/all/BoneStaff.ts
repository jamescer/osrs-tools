import { Item } from "../Item";

const BoneStaffData = {
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
    id: 28796,
    name: "Bone staff"
  }
export const BoneStaff = Item.fromJson(BoneStaffData);
