import { Item } from "../Item";

const RawCrunchiesData = {
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
    id: 2202,
    name: "Raw crunchies"
  }
export const RawCrunchies = Item.fromJson(RawCrunchiesData);
