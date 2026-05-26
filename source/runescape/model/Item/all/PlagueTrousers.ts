import { Item } from "../Item";

const PlagueTrousersData = {
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
    id: 285,
    name: "Plague trousers"
  }
export const PlagueTrousers = Item.fromJson(PlagueTrousersData);
