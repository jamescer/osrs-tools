import { Item } from "../Item";

const RadasCensusData = {
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
    id: 13524,
    name: "Rada's census"
  }
export const RadasCensus = Item.fromJson(RadasCensusData);
