import { Item } from "../Item";

const SplitLogData = {
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
    id: 10812,
    name: "Split log"
  }
export const SplitLog = Item.fromJson(SplitLogData);
