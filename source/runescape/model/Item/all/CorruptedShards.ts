import { Item } from "../Item";

const CorruptedShardsData = {
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
    id: 23824,
    name: "Corrupted shards"
  }
export const CorruptedShards = Item.fromJson(CorruptedShardsData);
