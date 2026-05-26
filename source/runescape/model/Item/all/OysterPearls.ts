import { Item } from "../Item";

const OysterPearlsData = {
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
    id: 413,
    name: "Oyster pearls"
  }
export const OysterPearls = Item.fromJson(OysterPearlsData);
