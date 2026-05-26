import { Item } from "../Item";

const CookedChompyData = {
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
    id: 2878,
    name: "Cooked chompy"
  }
export const CookedChompy = Item.fromJson(CookedChompyData);
