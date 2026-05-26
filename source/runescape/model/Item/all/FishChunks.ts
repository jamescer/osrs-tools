import { Item } from "../Item";

const FishChunksData = {
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
    id: 22818,
    name: "Fish chunks"
  }
export const FishChunks = Item.fromJson(FishChunksData);
