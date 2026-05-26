import { Item } from "../Item";

const CarpentersShirtData = {
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
    id: 24874,
    name: "Carpenter's shirt"
  }
export const CarpentersShirt = Item.fromJson(CarpentersShirtData);
