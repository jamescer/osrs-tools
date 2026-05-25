import { Item } from "../Item";

const SailingBookData = {{
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
    id: 9904,
    name: "Sailing book"
  }
export const SailingBook = Item.fromJson(SailingBookData);