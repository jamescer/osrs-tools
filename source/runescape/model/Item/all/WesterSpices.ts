import { Item } from "../Item";

const WesterSpicesData = {
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
    id: 21244,
    name: "Wester spices"
  }
export const WesterSpices = Item.fromJson(WesterSpicesData);
