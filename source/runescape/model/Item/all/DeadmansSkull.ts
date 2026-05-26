import { Item } from "../Item";

const DeadmansSkullData = {
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
    id: 33065,
    name: "Deadman's skull"
  }
export const DeadmansSkull = Item.fromJson(DeadmansSkullData);
