import { Item } from "../Item";

const YellowSquareData = {
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
    id: 9607,
    name: "Yellow square"
  }
export const YellowSquare = Item.fromJson(YellowSquareData);
