import { Item } from "../Item";

const RosewoodSaplingData = {
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
    id: 31508,
    name: "Rosewood sapling"
  }
export const RosewoodSapling = Item.fromJson(RosewoodSaplingData);
