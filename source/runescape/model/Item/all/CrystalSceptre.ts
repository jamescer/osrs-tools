import { Item } from "../Item";

const CrystalSceptreData = {
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
    id: 23861,
    name: "Crystal sceptre"
  }
export const CrystalSceptre = Item.fromJson(CrystalSceptreData);
