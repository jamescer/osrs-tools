import { Item } from "../Item";

const OrangeSquareData = {
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
    id: 9603,
    name: "Orange square"
  }
export const OrangeSquare = Item.fromJson(OrangeSquareData);
