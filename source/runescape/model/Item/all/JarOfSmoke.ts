import { Item } from "../Item";

const JarOfSmokeData = {
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
    id: 25524,
    name: "Jar of smoke"
  }
export const JarOfSmoke = Item.fromJson(JarOfSmokeData);
