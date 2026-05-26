import { Item } from "../Item";

const GroundToothData = {
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
    id: 9082,
    name: "Ground tooth"
  }
export const GroundTooth = Item.fromJson(GroundToothData);
