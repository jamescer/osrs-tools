import { Item } from "../Item";

const EmptyOysterData = {
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
    id: 409,
    name: "Empty oyster"
  }
export const EmptyOyster = Item.fromJson(EmptyOysterData);
