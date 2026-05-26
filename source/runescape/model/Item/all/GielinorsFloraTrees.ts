import { Item } from "../Item";

const GielinorsFloraTreesData = {
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
    id: 23019,
    name: "Gielinor's flora - trees"
  }
export const GielinorsFloraTrees = Item.fromJson(GielinorsFloraTreesData);
