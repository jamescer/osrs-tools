import { Item } from "../Item";

const RawYellowfinData = {
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
    id: 32325,
    name: "Raw yellowfin"
  }
export const RawYellowfin = Item.fromJson(RawYellowfinData);
