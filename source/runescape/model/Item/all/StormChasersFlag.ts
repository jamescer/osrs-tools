import { Item } from "../Item";

const StormChasersFlagData = {{
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
    id: 32196,
    name: "Storm chaser's flag"
  }
export const StormChasersFlag = Item.fromJson(StormChasersFlagData);