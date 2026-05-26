import { Item } from "../Item";

const IronwoodPlankData = {
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
    id: 31435,
    name: "Ironwood plank"
  }
export const IronwoodPlank = Item.fromJson(IronwoodPlankData);
