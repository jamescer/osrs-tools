import { Item } from "../Item";

const VineFlowerData = {
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
    id: 29556,
    name: "Vine flower"
  }
export const VineFlower = Item.fromJson(VineFlowerData);
