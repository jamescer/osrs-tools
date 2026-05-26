import { Item } from "../Item";

const InitiateCuisseData = {
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
    id: 5576,
    name: "Initiate cuisse"
  }
export const InitiateCuisse = Item.fromJson(InitiateCuisseData);
