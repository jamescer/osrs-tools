import { Item } from "../Item";

const PoisonItemData = {{
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
    id: 273,
    name: "Poison (item)"
  }
export const PoisonItem = Item.fromJson(PoisonItemData);