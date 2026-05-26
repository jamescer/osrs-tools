import { Item } from "../Item";

const EmptySpiceShakerData = {
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
    id: 7496,
    name: "Empty spice shaker"
  }
export const EmptySpiceShaker = Item.fromJson(EmptySpiceShakerData);
