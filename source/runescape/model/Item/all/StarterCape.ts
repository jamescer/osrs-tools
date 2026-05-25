import { Item } from "../Item";

const StarterCapeData = {{
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
    id: 33063,
    name: "Starter cape"
  }
export const StarterCape = Item.fromJson(StarterCapeData);