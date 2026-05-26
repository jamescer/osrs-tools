import { Item } from "../Item";

const WhiteBerriesData = {
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
    id: 239,
    name: "White berries"
  }
export const WhiteBerries = Item.fromJson(WhiteBerriesData);
