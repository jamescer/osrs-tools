import { Item } from "../Item";

const LargeOvenemptyData = {
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
    id: 8220,
    name: "Large oven#Empty"
  }
export const LargeOvenempty = Item.fromJson(LargeOvenemptyData);
