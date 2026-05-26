import { Item } from "../Item";

const AdvancedChumStationData = {
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
    id: 32226,
    name: "Advanced chum station"
  }
export const AdvancedChumStation = Item.fromJson(AdvancedChumStationData);
