import { Item } from "../Item";

const GildedThroneData = {
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
    id: 8360,
    name: "Gilded throne"
  }
export const GildedThrone = Item.fromJson(GildedThroneData);
