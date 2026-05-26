import { Item } from "../Item";

const CrystalAcornData = {
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
    id: 23661,
    name: "Crystal acorn"
  }
export const CrystalAcorn = Item.fromJson(CrystalAcornData);
