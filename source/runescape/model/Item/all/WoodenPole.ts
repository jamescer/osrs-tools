import { Item } from "../Item";

const WoodenPoleData = {
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
    id: 26934,
    name: "Wooden pole"
  }
export const WoodenPole = Item.fromJson(WoodenPoleData);
