import { Item } from "../Item";

const ZombiePirateKeyData = {
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
    id: 29449,
    name: "Zombie pirate key"
  }
export const ZombiePirateKey = Item.fromJson(ZombiePirateKeyData);
