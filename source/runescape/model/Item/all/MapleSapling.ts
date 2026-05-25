import { Item } from "../Item";

const MapleSaplingData = {{
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
    id: 5372,
    name: "Maple sapling"
  }
export const MapleSapling = Item.fromJson(MapleSaplingData);