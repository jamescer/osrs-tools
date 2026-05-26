import { Item } from "../Item";

const LumpOfCrystalData = {
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
    id: 743,
    name: "Lump of crystal"
  }
export const LumpOfCrystal = Item.fromJson(LumpOfCrystalData);
