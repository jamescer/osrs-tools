import { Item } from "../Item";

const FishingHoodData = {{
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
    id: 9800,
    name: "Fishing hood"
  }
export const FishingHood = Item.fromJson(FishingHoodData);