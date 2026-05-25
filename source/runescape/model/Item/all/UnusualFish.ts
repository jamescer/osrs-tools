import { Item } from "../Item";

const UnusualFishData = {{
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
    id: 3703,
    name: "Unusual fish"
  }
export const UnusualFish = Item.fromJson(UnusualFishData);