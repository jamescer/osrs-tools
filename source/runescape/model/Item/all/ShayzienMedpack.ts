import { Item } from "../Item";

const ShayzienMedpackData = {
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
    id: 13382,
    name: "Shayzien medpack"
  }
export const ShayzienMedpack = Item.fromJson(ShayzienMedpackData);
