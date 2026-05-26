import { Item } from "../Item";

const TernFeatherData = {
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
    id: 32823,
    name: "Tern feather"
  }
export const TernFeather = Item.fromJson(TernFeatherData);
