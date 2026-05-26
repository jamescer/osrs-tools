import { Item } from "../Item";

const ConductorMouldData = {
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
    id: 4200,
    name: "Conductor mould"
  }
export const ConductorMould = Item.fromJson(ConductorMouldData);
