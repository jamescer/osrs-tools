import { Item } from "../Item";

const SeaTurtleData = {{
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
    id: 397,
    name: "Sea turtle"
  }
export const SeaTurtle = Item.fromJson(SeaTurtleData);