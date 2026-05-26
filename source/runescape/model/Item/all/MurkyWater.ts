import { Item } from "../Item";

const MurkyWaterData = {
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
    id: 2953,
    name: "Murky water"
  }
export const MurkyWater = Item.fromJson(MurkyWaterData);
