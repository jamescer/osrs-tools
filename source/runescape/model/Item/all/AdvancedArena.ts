import { Item } from "../Item";

const AdvancedArenaData = {{
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
    id: 12719,
    name: "Advanced arena"
  }
export const AdvancedArena = Item.fromJson(AdvancedArenaData);