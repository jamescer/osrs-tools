import { Item } from "../Item";

const FarmersShirtData = {
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
    id: 13643,
    name: "Farmer's shirt"
  }
export const FarmersShirt = Item.fromJson(FarmersShirtData);
