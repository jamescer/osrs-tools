import { Item } from "../Item";

const StrangeObjectData = {
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
    id: 3713,
    name: "Strange object"
  }
export const StrangeObject = Item.fromJson(StrangeObjectData);
