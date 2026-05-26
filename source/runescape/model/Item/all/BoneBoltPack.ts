import { Item } from "../Item";

const BoneBoltPackData = {
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
    id: 13193,
    name: "Bone bolt pack"
  }
export const BoneBoltPack = Item.fromJson(BoneBoltPackData);
