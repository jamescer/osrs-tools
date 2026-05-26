import { Item } from "../Item";

const WeaponStoreKeyData = {
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
    id: 759,
    name: "Weapon store key"
  }
export const WeaponStoreKey = Item.fromJson(WeaponStoreKeyData);
