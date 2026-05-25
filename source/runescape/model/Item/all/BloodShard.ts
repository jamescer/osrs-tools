import { Item } from "../Item";

const BloodShardData = {{
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
    id: 24777,
    name: "Blood shard"
  }
export const BloodShard = Item.fromJson(BloodShardData);