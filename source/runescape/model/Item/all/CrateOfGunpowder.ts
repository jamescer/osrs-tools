import { Item } from "../Item";

const CrateOfGunpowderData = {
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
    id: 32620,
    name: "Crate of gunpowder"
  }
export const CrateOfGunpowder = Item.fromJson(CrateOfGunpowderData);
