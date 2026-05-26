import { Item } from "../Item";

const DoubleAmmoMouldData = {
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
    id: 27012,
    name: "Double ammo mould"
  }
export const DoubleAmmoMould = Item.fromJson(DoubleAmmoMouldData);
