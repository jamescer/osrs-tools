import { Item } from "../Item";

const JarGeneratorData = {
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
    id: 11258,
    name: "Jar generator"
  }
export const JarGenerator = Item.fromJson(JarGeneratorData);
