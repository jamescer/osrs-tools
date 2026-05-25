import { Item } from "../Item";

const SmallSalvageData = {{
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
    id: 32847,
    name: "Small salvage"
  }
export const SmallSalvage = Item.fromJson(SmallSalvageData);