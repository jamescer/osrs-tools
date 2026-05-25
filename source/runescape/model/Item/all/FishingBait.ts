import { Item } from "../Item";

const FishingBaitData = {{
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
    id: 313,
    name: "Fishing bait"
  }
export const FishingBait = Item.fromJson(FishingBaitData);