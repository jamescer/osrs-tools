import { Item } from "../Item";

const PremadePPunchData = {
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
    id: 2036,
    name: "Premade p' punch"
  }
export const PremadePPunch = Item.fromJson(PremadePPunchData);
