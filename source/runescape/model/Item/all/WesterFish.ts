import { Item } from "../Item";

const WesterFishData = {
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
    id: 21249,
    name: "Wester fish"
  }
export const WesterFish = Item.fromJson(WesterFishData);
