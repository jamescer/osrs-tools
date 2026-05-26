import { Item } from "../Item";

const BuchuLeafData = {
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
    id: 20908,
    name: "Buchu leaf"
  }
export const BuchuLeaf = Item.fromJson(BuchuLeafData);
