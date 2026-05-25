import { Item } from "../Item";

const CorruptedHelmData = {{
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
    id: 20838,
    name: "Corrupted helm"
  }
export const CorruptedHelm = Item.fromJson(CorruptedHelmData);