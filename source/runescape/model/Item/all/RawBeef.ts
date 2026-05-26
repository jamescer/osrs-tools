import { Item } from "../Item";

const RawBeefData = {
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
    id: 2132,
    name: "Raw beef"
  }
export const RawBeef = Item.fromJson(RawBeefData);
