import { Item } from "../Item";

const WeaponPoisonData = {
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
    id: 187,
    name: "Weapon poison"
  }
export const WeaponPoison = Item.fromJson(WeaponPoisonData);
