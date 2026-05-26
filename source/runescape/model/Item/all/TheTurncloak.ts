import { Item } from "../Item";

const TheTurncloakData = {
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
    id: 22416,
    name: "The turncloak"
  }
export const TheTurncloak = Item.fromJson(TheTurncloakData);
