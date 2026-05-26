import { Item } from "../Item";

const CrystalOfMeilyrData = {
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
    id: 23937,
    name: "Crystal of meilyr"
  }
export const CrystalOfMeilyr = Item.fromJson(CrystalOfMeilyrData);
