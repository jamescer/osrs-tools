import { Item } from "../Item";

const RawSeaTurtleData = {{
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
    id: 395,
    name: "Raw sea turtle"
  }
export const RawSeaTurtle = Item.fromJson(RawSeaTurtleData);