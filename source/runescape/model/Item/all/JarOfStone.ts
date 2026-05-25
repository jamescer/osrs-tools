import { Item } from "../Item";

const JarOfStoneData = {{
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
    id: 21745,
    name: "Jar of stone"
  }
export const JarOfStone = Item.fromJson(JarOfStoneData);