import { Item } from "../Item";

const StoneHeadCavityData = {
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
    id: 7002,
    name: "Stone head (Cavity)"
  }
export const StoneHeadCavity = Item.fromJson(StoneHeadCavityData);
