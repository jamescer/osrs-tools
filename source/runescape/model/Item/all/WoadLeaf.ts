import { Item } from "../Item";

const WoadLeafData = {
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
    id: 1793,
    name: "Woad leaf"
  }
export const WoadLeaf = Item.fromJson(WoadLeafData);
