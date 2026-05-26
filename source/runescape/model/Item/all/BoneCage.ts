import { Item } from "../Item";

const BoneCageData = {
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
    id: 8301,
    name: "Bone cage"
  }
export const BoneCage = Item.fromJson(BoneCageData);
