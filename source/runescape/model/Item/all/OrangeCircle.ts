import { Item } from "../Item";

const OrangeCircleData = {
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
    id: 9601,
    name: "Orange circle"
  }
export const OrangeCircle = Item.fromJson(OrangeCircleData);
