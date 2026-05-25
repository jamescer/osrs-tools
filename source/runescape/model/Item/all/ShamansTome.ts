import { Item } from "../Item";

const ShamansTomeData = {{
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
    id: 729,
    name: "Shaman's tome"
  }
export const ShamansTome = Item.fromJson(ShamansTomeData);