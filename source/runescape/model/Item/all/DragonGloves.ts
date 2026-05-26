import { Item } from "../Item";

const DragonGlovesData = {
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
    id: 7461,
    name: "Dragon gloves"
  }
export const DragonGloves = Item.fromJson(DragonGlovesData);
