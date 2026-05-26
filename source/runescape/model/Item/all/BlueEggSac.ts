import { Item } from "../Item";

const BlueEggSacData = {
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
    id: 25846,
    name: "Blue egg sac"
  }
export const BlueEggSac = Item.fromJson(BlueEggSacData);
