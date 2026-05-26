import { Item } from "../Item";

const CoinsShiloVillageData = {
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
    id: 617,
    name: "Coins (Shilo Village)"
  }
export const CoinsShiloVillage = Item.fromJson(CoinsShiloVillageData);
