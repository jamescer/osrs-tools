import { Item } from "../Item";

const GiantPresentData = {
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
    id: 20836,
    name: "Giant present"
  }
export const GiantPresent = Item.fromJson(GiantPresentData);
