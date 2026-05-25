import { Item } from "../Item";

const FreeToPlayStarterPackData = {{
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
    id: 12955,
    name: "Free to play starter pack"
  }
export const FreeToPlayStarterPack = Item.fromJson(FreeToPlayStarterPackData);