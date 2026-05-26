import { Item } from "../Item";

const CookedMeatUndeadData = {
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
    id: 4293,
    name: "Cooked meat (undead)"
  }
export const CookedMeatUndead = Item.fromJson(CookedMeatUndeadData);
