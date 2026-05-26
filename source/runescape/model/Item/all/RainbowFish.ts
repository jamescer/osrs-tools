import { Item } from "../Item";

const RainbowFishData = {
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
    id: 10136,
    name: "Rainbow fish"
  }
export const RainbowFish = Item.fromJson(RainbowFishData);
