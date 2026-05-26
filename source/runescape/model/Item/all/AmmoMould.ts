import { Item } from "../Item";

const AmmoMouldData = {
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
    id: 4,
    name: "Ammo mould"
  }
export const AmmoMould = Item.fromJson(AmmoMouldData);
