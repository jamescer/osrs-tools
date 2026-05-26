import { Item } from "../Item";

const BrokenPoleData = {
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
    id: 4496,
    name: "Broken pole"
  }
export const BrokenPole = Item.fromJson(BrokenPoleData);
