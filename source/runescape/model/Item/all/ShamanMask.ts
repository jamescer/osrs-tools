import { Item } from "../Item";

const ShamanMaskData = {
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
    id: 21838,
    name: "Shaman mask"
  }
export const ShamanMask = Item.fromJson(ShamanMaskData);
