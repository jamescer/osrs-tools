import { Item } from "../Item";

const ZenyteShardData = {
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
    id: 19529,
    name: "Zenyte shard"
  }
export const ZenyteShard = Item.fromJson(ZenyteShardData);
