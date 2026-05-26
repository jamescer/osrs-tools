import { Item } from "../Item";

const SodiumChlorideData = {
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
    id: 5580,
    name: "Sodium chloride"
  }
export const SodiumChloride = Item.fromJson(SodiumChlorideData);
