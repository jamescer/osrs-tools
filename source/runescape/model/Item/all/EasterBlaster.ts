import { Item } from "../Item";

const EasterBlasterData = {
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
    id: 13185,
    name: "Easter blaster"
  }
export const EasterBlaster = Item.fromJson(EasterBlasterData);
