import { Item } from "../Item";

const FlyFishingRodData = {
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
    id: 309,
    name: "Fly fishing rod"
  }
export const FlyFishingRod = Item.fromJson(FlyFishingRodData);
