import { Item } from "../Item";

const BaboonEmblemData = {
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
    id: 26958,
    name: "Baboon emblem"
  }
export const BaboonEmblem = Item.fromJson(BaboonEmblemData);
