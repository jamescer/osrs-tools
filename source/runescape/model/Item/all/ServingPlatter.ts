import { Item } from "../Item";

const ServingPlatterData = {
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
    id: 32926,
    name: "Serving platter"
  }
export const ServingPlatter = Item.fromJson(ServingPlatterData);
