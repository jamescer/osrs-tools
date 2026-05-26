import { Item } from "../Item";

const MapOfAlacrityItemData = {
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
    id: 33233,
    name: "Map of alacrity (item)"
  }
export const MapOfAlacrityItem = Item.fromJson(MapOfAlacrityItemData);
