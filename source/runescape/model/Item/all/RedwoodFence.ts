import { Item } from "../Item";

const RedwoodFenceData = {
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
    id: 20647,
    name: "Redwood fence"
  }
export const RedwoodFence = Item.fromJson(RedwoodFenceData);
