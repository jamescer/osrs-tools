import { Item } from "../Item";

const JarOfDreamsData = {
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
    id: 24495,
    name: "Jar of dreams"
  }
export const JarOfDreams = Item.fromJson(JarOfDreamsData);
