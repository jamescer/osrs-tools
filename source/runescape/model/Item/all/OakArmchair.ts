import { Item } from "../Item";

const OakArmchairData = {
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
    id: 8313,
    name: "Oak armchair"
  }
export const OakArmchair = Item.fromJson(OakArmchairData);
