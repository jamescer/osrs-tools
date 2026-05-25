import { Item } from "../Item";

const MonksRobeData = {{
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
    id: 542,
    name: "Monk's robe"
  }
export const MonksRobe = Item.fromJson(MonksRobeData);