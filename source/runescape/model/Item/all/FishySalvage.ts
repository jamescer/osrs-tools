import { Item } from "../Item";

const FishySalvageData = {
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
    id: 32849,
    name: "Fishy salvage"
  }
export const FishySalvage = Item.fromJson(FishySalvageData);
