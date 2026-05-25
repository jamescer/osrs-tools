import { Item } from "../Item";

const JarOfSandData = {{
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
    id: 12885,
    name: "Jar of sand"
  }
export const JarOfSand = Item.fromJson(JarOfSandData);