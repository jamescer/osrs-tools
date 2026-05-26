import { Item } from "../Item";

const VialOfBloodData = {
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
    id: 22446,
    name: "Vial of blood"
  }
export const VialOfBlood = Item.fromJson(VialOfBloodData);
