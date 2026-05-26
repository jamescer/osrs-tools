import { Item } from "../Item";

const HuntersLootSackSuppliesData = {
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
    id: 30644,
    name: "Hunters' loot sack (supplies)"
  }
export const HuntersLootSackSupplies = Item.fromJson(HuntersLootSackSuppliesData);
