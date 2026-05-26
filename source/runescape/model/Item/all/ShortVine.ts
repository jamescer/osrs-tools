import { Item } from "../Item";

const ShortVineData = {
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
    id: 7778,
    name: "Short vine"
  }
export const ShortVine = Item.fromJson(ShortVineData);
