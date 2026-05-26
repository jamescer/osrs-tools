import { Item } from "../Item";

const MatureWmbData = {
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
    id: 5741,
    name: "Mature wmb"
  }
export const MatureWmb = Item.fromJson(MatureWmbData);
