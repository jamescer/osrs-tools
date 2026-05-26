import { Item } from "../Item";

const EntsRootsData = {
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
    id: 21798,
    name: "Ent's roots"
  }
export const EntsRoots = Item.fromJson(EntsRootsData);
