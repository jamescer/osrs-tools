import { Item } from "../Item";

const CrystalOfIthellData = {
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
    id: 23927,
    name: "Crystal of ithell"
  }
export const CrystalOfIthell = Item.fromJson(CrystalOfIthellData);
