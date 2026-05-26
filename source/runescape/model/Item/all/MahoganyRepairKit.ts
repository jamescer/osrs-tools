import { Item } from "../Item";

const MahoganyRepairKitData = {
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
    id: 31973,
    name: "Mahogany repair kit"
  }
export const MahoganyRepairKit = Item.fromJson(MahoganyRepairKitData);
