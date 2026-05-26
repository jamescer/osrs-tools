import { Item } from "../Item";

const YellowTriangleData = {
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
    id: 9606,
    name: "Yellow triangle"
  }
export const YellowTriangle = Item.fromJson(YellowTriangleData);
