import { Item } from "../Item";

const GoldKeyRedData = {
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
    id: 25424,
    name: "Gold key red"
  }
export const GoldKeyRed = Item.fromJson(GoldKeyRedData);
