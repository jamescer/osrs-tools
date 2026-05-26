import { Item } from "../Item";

const WillowSaplingData = {
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
    id: 5371,
    name: "Willow sapling"
  }
export const WillowSapling = Item.fromJson(WillowSaplingData);
