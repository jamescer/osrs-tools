import { Item } from "../Item";

const ChompyChickData = {
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
    id: 13071,
    name: "Chompy chick"
  }
export const ChompyChick = Item.fromJson(ChompyChickData);
