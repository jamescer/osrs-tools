import { Item } from "../Item";

const RedTriangleData = {
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
    id: 9598,
    name: "Red triangle"
  }
export const RedTriangle = Item.fromJson(RedTriangleData);
