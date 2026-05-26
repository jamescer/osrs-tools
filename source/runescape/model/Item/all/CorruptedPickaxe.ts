import { Item } from "../Item";

const CorruptedPickaxeData = {
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
    id: 23822,
    name: "Corrupted pickaxe"
  }
export const CorruptedPickaxe = Item.fromJson(CorruptedPickaxeData);
