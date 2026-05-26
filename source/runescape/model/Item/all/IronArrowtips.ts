import { Item } from "../Item";

const IronArrowtipsData = {
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
    id: 40,
    name: "Iron arrowtips"
  }
export const IronArrowtips = Item.fromJson(IronArrowtipsData);
