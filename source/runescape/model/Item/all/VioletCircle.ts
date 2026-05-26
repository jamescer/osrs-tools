import { Item } from "../Item";

const VioletCircleData = {
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
    id: 9621,
    name: "Violet circle"
  }
export const VioletCircle = Item.fromJson(VioletCircleData);
