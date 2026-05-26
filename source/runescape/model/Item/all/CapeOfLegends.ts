import { Item } from "../Item";

const CapeOfLegendsData = {
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
    id: 1052,
    name: "Cape of legends"
  }
export const CapeOfLegends = Item.fromJson(CapeOfLegendsData);
