import { Item } from "../Item";

const BrokenArmourData = {
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
    id: 698,
    name: "Broken armour"
  }
export const BrokenArmour = Item.fromJson(BrokenArmourData);
