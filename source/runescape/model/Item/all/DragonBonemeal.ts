import { Item } from "../Item";

const DragonBonemealData = {
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
    id: 4261,
    name: "Dragon bonemeal"
  }
export const DragonBonemeal = Item.fromJson(DragonBonemealData);
