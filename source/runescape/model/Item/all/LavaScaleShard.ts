import { Item } from "../Item";

const LavaScaleShardData = {
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
    id: 11994,
    name: "Lava scale shard"
  }
export const LavaScaleShard = Item.fromJson(LavaScaleShardData);
