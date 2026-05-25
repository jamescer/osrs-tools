import { Item } from "../Item";

const EmptyGourdVialData = {{
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
    id: 20800,
    name: "Empty gourd vial"
  }
export const EmptyGourdVial = Item.fromJson(EmptyGourdVialData);