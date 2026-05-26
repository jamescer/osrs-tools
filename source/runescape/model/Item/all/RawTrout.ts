import { Item } from "../Item";

const RawTroutData = {
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
    id: 335,
    name: "Raw trout"
  }
export const RawTrout = Item.fromJson(RawTroutData);
