import { Item } from "../Item";

const PotatoSackData = {{
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
    id: 30947,
    name: "Potato sack"
  }
export const PotatoSack = Item.fromJson(PotatoSackData);