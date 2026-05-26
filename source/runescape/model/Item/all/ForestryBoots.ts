import { Item } from "../Item";

const ForestryBootsData = {
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
    id: 28175,
    name: "Forestry boots"
  }
export const ForestryBoots = Item.fromJson(ForestryBootsData);
