import { Item } from "../Item";

const GoblinKitchenKeyData = {
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
    id: 601,
    name: "Goblin kitchen key"
  }
export const GoblinKitchenKey = Item.fromJson(GoblinKitchenKeyData);
