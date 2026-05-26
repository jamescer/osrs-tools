import { Item } from "../Item";

const BreadDoughData = {
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
    id: 2307,
    name: "Bread dough"
  }
export const BreadDough = Item.fromJson(BreadDoughData);
