import { Item } from "../Item";

const JarOfFeathersData = {
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
    id: 32921,
    name: "Jar of feathers"
  }
export const JarOfFeathers = Item.fromJson(JarOfFeathersData);
