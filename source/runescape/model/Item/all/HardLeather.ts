import { Item } from "../Item";

const HardLeatherData = {{
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
    id: 1743,
    name: "Hard leather"
  }
export const HardLeather = Item.fromJson(HardLeatherData);