import { Item } from "../Item";

const RuneEssenceData = {
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
    id: 1436,
    name: "Rune essence"
  }
export const RuneEssence = Item.fromJson(RuneEssenceData);
