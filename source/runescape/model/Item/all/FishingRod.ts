import { Item } from "../Item";

const FishingRodData = {
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
    id: 307,
    name: "Fishing rod"
  }
export const FishingRod = Item.fromJson(FishingRodData);
