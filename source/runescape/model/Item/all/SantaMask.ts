import { Item } from "../Item";

const SantaMaskData = {
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
    id: 12887,
    name: "Santa mask"
  }
export const SantaMask = Item.fromJson(SantaMaskData);
