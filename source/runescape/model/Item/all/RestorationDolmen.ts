import { Item } from "../Item";

const RestorationDolmenData = {
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
    id: 29541,
    name: "Restoration dolmen"
  }
export const RestorationDolmen = Item.fromJson(RestorationDolmenData);
