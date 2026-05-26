import { Item } from "../Item";

const HealingVialemptyData = {
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
    id: 10546,
    name: "Healing vial#Empty"
  }
export const HealingVialempty = Item.fromJson(HealingVialemptyData);
