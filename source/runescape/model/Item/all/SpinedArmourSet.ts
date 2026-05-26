import { Item } from "../Item";

const SpinedArmourSetData = {
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
    id: 31157,
    name: "Spined armour set"
  }
export const SpinedArmourSet = Item.fromJson(SpinedArmourSetData);
