import { Item } from "../Item";

const CrystalChimeData = {
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
    id: 28577,
    name: "Crystal chime"
  }
export const CrystalChime = Item.fromJson(CrystalChimeData);
