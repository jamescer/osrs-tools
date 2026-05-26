import { Item } from "../Item";

const DragonHarpoonData = {
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
    id: 21028,
    name: "Dragon harpoon"
  }
export const DragonHarpoon = Item.fromJson(DragonHarpoonData);
