import { Item } from "../Item";

const ImperialRosData = {
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
    id: 29966,
    name: "Imperial rosé"
  }
export const ImperialRos = Item.fromJson(ImperialRosData);
