import { Item } from "../Item";

const BarbarianArmData = {
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
    id: 33221,
    name: "Barbarian arm"
  }
export const BarbarianArm = Item.fromJson(BarbarianArmData);
