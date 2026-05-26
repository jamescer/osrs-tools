import { Item } from "../Item";

const FremennikHatData = {
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
    id: 3797,
    name: "Fremennik hat"
  }
export const FremennikHat = Item.fromJson(FremennikHatData);
