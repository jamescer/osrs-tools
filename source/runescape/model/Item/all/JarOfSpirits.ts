import { Item } from "../Item";

const JarOfSpiritsData = {{
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
    id: 25521,
    name: "Jar of spirits"
  }
export const JarOfSpirits = Item.fromJson(JarOfSpiritsData);