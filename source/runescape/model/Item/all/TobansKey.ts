import { Item } from "../Item";

const TobansKeyData = {
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
    id: 2378,
    name: "Toban's key"
  }
export const TobansKey = Item.fromJson(TobansKeyData);
