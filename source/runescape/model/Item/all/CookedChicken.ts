import { Item } from "../Item";

const CookedChickenData = {
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
    id: 2140,
    name: "Cooked chicken"
  }
export const CookedChicken = Item.fromJson(CookedChickenData);
