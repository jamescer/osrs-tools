import { Item } from "../Item";

const BloodierKeyData = {
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
    id: 20608,
    name: "Bloodier key"
  }
export const BloodierKey = Item.fromJson(BloodierKeyData);
