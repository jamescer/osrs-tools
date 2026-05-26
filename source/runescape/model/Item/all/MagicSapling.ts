import { Item } from "../Item";

const MagicSaplingData = {
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
    id: 5374,
    name: "Magic sapling"
  }
export const MagicSapling = Item.fromJson(MagicSaplingData);
