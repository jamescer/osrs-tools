import { Item } from "../Item";

const CrackedSampleData = {{
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
    id: 674,
    name: "Cracked sample"
  }
export const CrackedSample = Item.fromJson(CrackedSampleData);