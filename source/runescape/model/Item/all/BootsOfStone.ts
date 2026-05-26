import { Item } from "../Item";

const BootsOfStoneData = {
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
    id: 23037,
    name: "Boots of stone"
  }
export const BootsOfStone = Item.fromJson(BootsOfStoneData);
