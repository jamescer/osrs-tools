import { Item } from "../Item";

const SilverLocksData = {
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
    id: 25451,
    name: "Silver locks"
  }
export const SilverLocks = Item.fromJson(SilverLocksData);
