import { Item } from "../Item";

const IronLimbsData = {
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
    id: 9423,
    name: "Iron limbs"
  }
export const IronLimbs = Item.fromJson(IronLimbsData);
