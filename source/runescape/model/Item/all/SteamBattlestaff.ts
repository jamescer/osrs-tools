import { Item } from "../Item";

const SteamBattlestaffData = {
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
    id: 11787,
    name: "Steam battlestaff"
  }
export const SteamBattlestaff = Item.fromJson(SteamBattlestaffData);
