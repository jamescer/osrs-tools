import { Item } from "../Item";

const YewSaplingData = {
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
    id: 5373,
    name: "Yew sapling"
  }
export const YewSapling = Item.fromJson(YewSaplingData);
