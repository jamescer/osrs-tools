import { Item } from "../Item";

const DesertDisguiseData = {
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
    id: 4611,
    name: "Desert disguise"
  }
export const DesertDisguise = Item.fromJson(DesertDisguiseData);
