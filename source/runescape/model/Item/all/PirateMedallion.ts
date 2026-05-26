import { Item } from "../Item";

const PirateMedallionData = {
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
    id: 31297,
    name: "Pirate medallion"
  }
export const PirateMedallion = Item.fromJson(PirateMedallionData);
