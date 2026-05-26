import { Item } from "../Item";

const JarOfMiasmaData = {
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
    id: 13277,
    name: "Jar of miasma"
  }
export const JarOfMiasma = Item.fromJson(JarOfMiasmaData);
