import { Item } from "../Item";

const BirdNestEmptyData = {
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
    id: 5075,
    name: "Bird nest (empty)"
  }
export const BirdNestEmpty = Item.fromJson(BirdNestEmptyData);
