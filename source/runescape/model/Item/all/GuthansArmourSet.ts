import { Item } from "../Item";

const GuthansArmourSetData = {
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
    id: 12873,
    name: "Guthan's armour set"
  }
export const GuthansArmourSet = Item.fromJson(GuthansArmourSetData);
