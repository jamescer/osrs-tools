import { Item } from "../Item";

const GielinorsFloraHerbsData = {
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
    id: 23017,
    name: "Gielinor's flora - herbs"
  }
export const GielinorsFloraHerbs = Item.fromJson(GielinorsFloraHerbsData);
