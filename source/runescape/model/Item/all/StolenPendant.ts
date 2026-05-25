import { Item } from "../Item";

const StolenPendantData = {{
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
    id: 13434,
    name: "Stolen pendant"
  }
export const StolenPendant = Item.fromJson(StolenPendantData);