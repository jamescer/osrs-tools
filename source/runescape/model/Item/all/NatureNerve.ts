import { Item } from "../Item";

const NatureNerveData = {
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
    id: 28451,
    name: "Nature nerve"
  }
export const NatureNerve = Item.fromJson(NatureNerveData);
