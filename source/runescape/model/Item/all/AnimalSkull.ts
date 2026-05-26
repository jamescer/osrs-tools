import { Item } from "../Item";

const AnimalSkullData = {
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
    id: 671,
    name: "Animal skull"
  }
export const AnimalSkull = Item.fromJson(AnimalSkullData);
