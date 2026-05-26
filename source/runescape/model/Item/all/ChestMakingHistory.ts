import { Item } from "../Item";

const ChestMakingHistoryData = {
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
    id: 6759,
    name: "Chest (Making History)"
  }
export const ChestMakingHistory = Item.fromJson(ChestMakingHistoryData);
