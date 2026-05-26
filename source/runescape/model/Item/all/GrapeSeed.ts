import { Item } from "../Item";

const GrapeSeedData = {
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
    id: 13657,
    name: "Grape seed"
  }
export const GrapeSeed = Item.fromJson(GrapeSeedData);
