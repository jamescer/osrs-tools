import { Item } from "../Item";

const ThrowingRopeData = {
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
    id: 945,
    name: "Throwing rope"
  }
export const ThrowingRope = Item.fromJson(ThrowingRopeData);
