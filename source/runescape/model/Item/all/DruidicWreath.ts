import { Item } from "../Item";

const DruidicWreathData = {
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
    id: 12600,
    name: "Druidic wreath"
  }
export const DruidicWreath = Item.fromJson(DruidicWreathData);
