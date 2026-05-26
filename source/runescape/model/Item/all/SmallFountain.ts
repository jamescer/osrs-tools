import { Item } from "../Item";

const SmallFountainData = {
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
    id: 8193,
    name: "Small fountain"
  }
export const SmallFountain = Item.fromJson(SmallFountainData);
