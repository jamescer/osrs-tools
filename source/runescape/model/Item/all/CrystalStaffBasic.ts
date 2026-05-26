import { Item } from "../Item";

const CrystalStaffBasicData = {
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
    id: 23898,
    name: "Crystal staff (basic)"
  }
export const CrystalStaffBasic = Item.fromJson(CrystalStaffBasicData);
