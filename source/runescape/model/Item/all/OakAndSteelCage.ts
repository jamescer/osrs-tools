import { Item } from "../Item";

const OakAndSteelCageData = {
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
    id: 8298,
    name: "Oak and steel cage"
  }
export const OakAndSteelCage = Item.fromJson(OakAndSteelCageData);
