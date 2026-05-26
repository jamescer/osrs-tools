import { Item } from "../Item";

const IronSwordData = {
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
    id: 1279,
    name: "Iron sword"
  }
export const IronSword = Item.fromJson(IronSwordData);
