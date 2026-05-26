import { Item } from "../Item";

const GublinchShardsData = {
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
    id: 10506,
    name: "Gublinch shards"
  }
export const GublinchShards = Item.fromJson(GublinchShardsData);
