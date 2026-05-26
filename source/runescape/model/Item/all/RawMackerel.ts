import { Item } from "../Item";

const RawMackerelData = {
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
    id: 353,
    name: "Raw mackerel"
  }
export const RawMackerel = Item.fromJson(RawMackerelData);
