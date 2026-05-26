import { Item } from "../Item";

const BirthdayCakeData = {
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
    id: 23108,
    name: "Birthday cake"
  }
export const BirthdayCake = Item.fromJson(BirthdayCakeData);
