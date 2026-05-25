import { Item } from "../Item";

const FishCrateEmptyData = {{
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
    id: 32366,
    name: "Fish crate (empty)"
  }
export const FishCrateEmpty = Item.fromJson(FishCrateEmptyData);