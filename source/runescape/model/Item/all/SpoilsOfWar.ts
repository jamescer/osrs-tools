import { Item } from "../Item";

const SpoilsOfWarData = {
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
    id: 25342,
    name: "Spoils of war"
  }
export const SpoilsOfWar = Item.fromJson(SpoilsOfWarData);
