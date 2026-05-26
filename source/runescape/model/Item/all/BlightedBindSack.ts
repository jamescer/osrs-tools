import { Item } from "../Item";

const BlightedBindSackData = {
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
    id: 24609,
    name: "Blighted bind sack"
  }
export const BlightedBindSack = Item.fromJson(BlightedBindSackData);
