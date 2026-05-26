import { Item } from "../Item";

const IronmanHelmData = {
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
    id: 12810,
    name: "Ironman helm"
  }
export const IronmanHelm = Item.fromJson(IronmanHelmData);
