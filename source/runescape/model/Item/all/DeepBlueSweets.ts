import { Item } from "../Item";

const DeepBlueSweetsData = {
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
    id: 4559,
    name: "Deep blue sweets"
  }
export const DeepBlueSweets = Item.fromJson(DeepBlueSweetsData);
