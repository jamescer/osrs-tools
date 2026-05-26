import { Item } from "../Item";

const RedundantHatData = {
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
    id: 21826,
    name: "Redundant hat"
  }
export const RedundantHat = Item.fromJson(RedundantHatData);
