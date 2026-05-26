import { Item } from "../Item";

const OrcaTeethData = {
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
    id: 32833,
    name: "Orca teeth"
  }
export const OrcaTeeth = Item.fromJson(OrcaTeethData);
