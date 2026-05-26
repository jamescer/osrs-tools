import { Item } from "../Item";

const HardyGoutTuberData = {
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
    id: 4001,
    name: "Hardy gout tuber"
  }
export const HardyGoutTuber = Item.fromJson(HardyGoutTuberData);
