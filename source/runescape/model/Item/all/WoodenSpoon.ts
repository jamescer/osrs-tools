import { Item } from "../Item";

const WoodenSpoonData = {
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
    id: 7433,
    name: "Wooden spoon"
  }
export const WoodenSpoon = Item.fromJson(WoodenSpoonData);
