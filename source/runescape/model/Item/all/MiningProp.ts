import { Item } from "../Item";

const MiningPropData = {
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
    id: 7958,
    name: "Mining prop"
  }
export const MiningProp = Item.fromJson(MiningPropData);
