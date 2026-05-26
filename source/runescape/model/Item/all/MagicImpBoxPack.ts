import { Item } from "../Item";

const MagicImpBoxPackData = {
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
    id: 12744,
    name: "Magic imp box pack"
  }
export const MagicImpBoxPack = Item.fromJson(MagicImpBoxPackData);
