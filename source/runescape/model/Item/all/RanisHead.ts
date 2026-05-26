import { Item } from "../Item";

const RanisHeadData = {
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
    id: 25964,
    name: "Ranis' head"
  }
export const RanisHead = Item.fromJson(RanisHeadData);
