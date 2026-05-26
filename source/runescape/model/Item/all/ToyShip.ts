import { Item } from "../Item";

const ToyShipData = {
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
    id: 3721,
    name: "Toy ship"
  }
export const ToyShip = Item.fromJson(ToyShipData);
