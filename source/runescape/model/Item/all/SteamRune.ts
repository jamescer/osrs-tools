import { Item } from "../Item";

const SteamRuneData = {{
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
    id: 4694,
    name: "Steam rune"
  }
export const SteamRune = Item.fromJson(SteamRuneData);