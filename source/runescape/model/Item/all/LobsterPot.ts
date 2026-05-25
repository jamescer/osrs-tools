import { Item } from "../Item";

const LobsterPotData = {{
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
    id: 301,
    name: "Lobster pot"
  }
export const LobsterPot = Item.fromJson(LobsterPotData);