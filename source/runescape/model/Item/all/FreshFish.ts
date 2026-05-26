import { Item } from "../Item";

const FreshFishData = {
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
    id: 13429,
    name: "Fresh fish"
  }
export const FreshFish = Item.fromJson(FreshFishData);
