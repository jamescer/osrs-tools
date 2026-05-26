import { Item } from "../Item";

const PinkCandyData = {
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
    id: 24988,
    name: "Pink candy"
  }
export const PinkCandy = Item.fromJson(PinkCandyData);
