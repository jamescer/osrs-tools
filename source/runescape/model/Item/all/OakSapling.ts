import { Item } from "../Item";

const OakSaplingData = {
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
    id: 5370,
    name: "Oak sapling"
  }
export const OakSapling = Item.fromJson(OakSaplingData);
