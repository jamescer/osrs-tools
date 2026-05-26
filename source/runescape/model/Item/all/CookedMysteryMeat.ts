import { Item } from "../Item";

const CookedMysteryMeatData = {
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
    id: 24785,
    name: "Cooked mystery meat"
  }
export const CookedMysteryMeat = Item.fromJson(CookedMysteryMeatData);
